"use client"

import {useEffect, useState} from "react";

export function Timer() {
  const [currentTime, setCurrentTime] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      <div>
        {currentTime}
      </div>
  )
}