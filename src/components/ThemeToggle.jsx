import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
// import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="w-11 h-11 rounded-full bg-orange-500 flex items-center justify-center text-white"
    >
      {darkMode ? "light" : "dark"}
    </button>
  );
}