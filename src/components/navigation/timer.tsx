"use client"

import {useEffect, useState} from "react";

export function Timer() {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [location, setLocation] = useState<string>("Euro / France");

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

  return (
      <div>
        {currentTime}
      </div>
  )
}