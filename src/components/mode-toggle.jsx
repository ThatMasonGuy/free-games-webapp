import { Moon, Sun, Computer } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "@/components/theme-provider";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "system") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("system");
    }
  };

  return (
    <Toggle
      className="bg-gray-800 rounded-lg p-1 w-10 h-10 focus:outline-none"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <Moon className="text-white" />
      ) : theme === "light" ? (
        <Sun className="text-yellow-400 border-1" />
      ) : (
        <Computer className="text-gray-400" />
      )}
    </Toggle>
  );
}

