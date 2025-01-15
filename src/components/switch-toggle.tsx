"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function SwitchToggle() {
  const { theme, setTheme } = useTheme()
  const isDarkMode = theme === "dark"

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className={`relative flex items-center w-12 h-6 rounded-full transition-colors ${
        isDarkMode ? "bg-gray-700" : "bg-gray-300"
      }`}
      aria-label="Toggle theme"
    >
      <span
        className={`absolute left-1 top-1 w-4 h-4 rounded-full  shadow-md transform transition-transform ${
          isDarkMode ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {isDarkMode ? (
          <Moon className="h-[1rem] w-[1rem] text-gray-200" />
        ) : (
          <Sun className="h-[1rem] w-[1rem] text-yellow-500" />
        )}
      </span>
    </button>
  )
}
