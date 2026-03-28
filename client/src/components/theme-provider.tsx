import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  applyTheme,
  getStoredThemeMode,
  persistThemeMode,
  resolveEffectiveTheme,
  type EffectiveTheme,
  type ThemeMode,
} from "@/lib/theme";

type ThemeContextValue = {
  mode: ThemeMode;
  effectiveTheme: EffectiveTheme;
  setMode: (mode: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(() => getStoredThemeMode());
  const [effectiveTheme, setEffectiveTheme] = useState<EffectiveTheme>(() =>
    resolveEffectiveTheme(getStoredThemeMode()),
  );

  useEffect(() => {
    persistThemeMode(mode);
    setEffectiveTheme(applyTheme(mode));
  }, [mode]);

  useEffect(() => {
    if (mode !== "auto") {
      return;
    }

    const intervalId = window.setInterval(() => {
      setEffectiveTheme(applyTheme("auto"));
    }, 60_000);

    return () => window.clearInterval(intervalId);
  }, [mode]);

  const value = useMemo(
    () => ({
      mode,
      effectiveTheme,
      setMode,
    }),
    [mode, effectiveTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
