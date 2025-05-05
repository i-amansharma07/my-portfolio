import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("theme")) localStorage.setItem("theme", "dark");
    setIsDarkMode(localStorage.getItem("theme") === "dark");
  }, []);

  function changeTheme() {
    const isCurrentThemeDark = theme === "dark";
    setIsDarkMode(!isCurrentThemeDark);
    setTheme(isCurrentThemeDark ? "light" : "dark");
  }

  return (
    <label className="inline-flex items-center cursor-pointer">
      <Sun
        size={20}
        className={`${
          isDarkMode ? "opacity-50" : "text-yellow-500"
        } transition-opacity duration-300`}
      />

      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={changeTheme}
        className="sr-only peer"
      />

      <div
        className="
                relative w-11 h-6 mx-2 
                bg-gray-200 dark:bg-gray-700 
                rounded-full peer 
                peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600
                after:content-[''] after:absolute after:top-[2px] after:start-[2px]
                after:bg-white after:border-gray-300 dark:after:border-gray-600
                after:border after:rounded-full after:h-5 after:w-5 
                after:transition-all after:duration-2000 after:ease-in-out
                peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                peer-checked:after:border-white
            "
      ></div>

      <Moon
        size={20}
        className={`${
          isDarkMode ? "text-blue-400" : "opacity-50"
        } transition-opacity duration-300`}
      />
    </label>
  );
};

export default ThemeSwitch;

