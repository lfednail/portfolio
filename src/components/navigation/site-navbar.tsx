'use client'

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [location, setLocation] = useState<string>("Loading...");

  // Update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      setCurrentTime(now.toLocaleTimeString([], options));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Simuler l'obtention de l'emplacement
  useEffect(() => {
    setLocation("Euro / France"); // Replace with your dynamic logic
  }, []);

  return (
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-800 text-white sticky top-0 z-50">
        {/* Left: Location */}
        <div className="text-sm">
          <span className="font-bold"></span> {location}
        </div>

        {/* Center: navigation */}
        <ul className="flex space-x-8 text-md">
          <li className="hover:text-gray-300">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link href="/about">About Me</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link href="/education">Education</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link href="/work">Work</Link>
          </li>
          <li className="hover:text-red-500">
            <Link href="/fun-projects">Fun Projects</Link>
          </li>
        </ul>

        {/* Right: Date and Time */}
        <div className="text-sm">
          <span className="font-bold size-3"></span> {currentTime}
        </div>
      </nav>
  );
};

export default Navbar;
