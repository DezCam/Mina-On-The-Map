import { Check, ChevronDown, Monitor, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";
import { appearanceOptions, type ThemeMode } from "@/lib/theme";

const modeIcons = {
  light: Sun,
  dark: Moon,
  auto: Monitor,
} satisfies Record<ThemeMode, typeof Sun>;

export default function AppearanceToggle() {
  const { mode, setMode } = useTheme();
  const ActiveIcon = modeIcons[mode];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className="h-10 rounded-full border-sandy-tan bg-white/95 px-3 text-earth-brown shadow-sm hover:bg-warm-beige focus-visible:ring-teal-primary dark:bg-card dark:hover:bg-accent"
          aria-label={`Appearance: ${mode}`}
        >
          <ActiveIcon className="h-4 w-4" />
          <span className="hidden text-sm font-lato font-semibold sm:inline">
            {appearanceOptions.find((option) => option.value === mode)?.label}
          </span>
          <ChevronDown className="h-4 w-4 opacity-70" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-56 rounded-2xl border-sandy-tan bg-white p-2 shadow-lg dark:bg-popover"
      >
        <DropdownMenuLabel className="font-lato text-earth-brown">
          Appearance
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={mode}
          onValueChange={(value) => setMode(value as ThemeMode)}
        >
          {appearanceOptions.map((option) => {
            const OptionIcon = modeIcons[option.value];

            return (
              <DropdownMenuRadioItem
                key={option.value}
                value={option.value}
                className="rounded-xl px-8 py-2 font-lato text-dark-brown"
              >
                <OptionIcon className="h-4 w-4 text-teal-primary" />
                <span>{option.label}</span>
                {mode === option.value ? (
                  <Check className="ml-auto h-4 w-4 text-teal-primary" />
                ) : null}
              </DropdownMenuRadioItem>
            );
          })}
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <p className="px-2 py-1 text-xs font-merriweather leading-5 text-gray-500">
          Matches day and night based on your device time.
        </p>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
