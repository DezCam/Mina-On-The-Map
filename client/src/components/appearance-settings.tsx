import { Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "@/components/theme-provider";
import type { ThemeMode } from "@/lib/theme";

const appearanceOptions: { value: ThemeMode; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "auto", label: "Auto" },
];

export default function AppearanceSettings() {
  const { mode, setMode } = useTheme();

  return (
    <Card className="bg-white rounded-2xl shadow-lg">
      <CardContent className="p-8">
        <div className="mb-6 flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-primary text-white">
            <Palette className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-lato text-2xl font-bold text-earth-brown">
              Appearance
            </h3>
            <p className="mt-2 font-merriweather text-sm leading-6 text-gray-600">
              Choose how Mina On The Map looks across the site.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <label className="block font-lato text-sm font-semibold text-gray-700">
            Appearance
          </label>
          <Select value={mode} onValueChange={(value) => setMode(value as ThemeMode)}>
            <SelectTrigger className="h-12 rounded-xl border-gray-300 bg-white font-lato text-base text-dark-brown">
              <SelectValue placeholder="Select appearance" />
            </SelectTrigger>
            <SelectContent>
              {appearanceOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="font-merriweather text-sm text-gray-500">
            Matches day and night based on your device time.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
