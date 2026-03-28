export type ThemeMode = "light" | "dark" | "auto";
export type EffectiveTheme = Exclude<ThemeMode, "auto">;

export const THEME_STORAGE_KEY = "mina-on-the-map:appearance";
export const appearanceOptions: { value: ThemeMode; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "auto", label: "Auto" },
];

export function isThemeMode(value: string | null): value is ThemeMode {
  return value === "light" || value === "dark" || value === "auto";
}

export function getStoredThemeMode(): ThemeMode {
  if (typeof window === "undefined") {
    return "auto";
  }

  const storedMode = window.localStorage.getItem(THEME_STORAGE_KEY);
  return isThemeMode(storedMode) ? storedMode : "auto";
}

export function resolveEffectiveTheme(
  mode: ThemeMode,
  date = new Date(),
): EffectiveTheme {
  if (mode === "light" || mode === "dark") {
    return mode;
  }

  const hour = date.getHours();
  return hour >= 19 || hour < 7 ? "dark" : "light";
}

export function applyTheme(mode: ThemeMode, root = document.documentElement) {
  const effectiveTheme = resolveEffectiveTheme(mode);

  root.classList.toggle("dark", effectiveTheme === "dark");
  root.dataset.appearance = mode;
  root.dataset.theme = effectiveTheme;
  root.style.colorScheme = effectiveTheme;

  return effectiveTheme;
}

export function persistThemeMode(mode: ThemeMode) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(THEME_STORAGE_KEY, mode);
}

export function bootstrapTheme() {
  if (typeof document === "undefined") {
    return;
  }

  applyTheme(getStoredThemeMode(), document.documentElement);
}
