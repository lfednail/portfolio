'use client';

import React, {useState} from 'react';
import {Timer} from "@/components/navigation/timer";
import Link from "next/link";
import {SwitchToggle} from "@/components/switch-toggle";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="h-14 flex items-center border-b">
        <div className="container max-w-screen-4xl flex items-center justify-between">
          {/* Logo or Home Link */}
          <div>
            <Link href="/" className="font-bold">Europe / France</Link>
          </div>

          {/* Navigation for large screens */}
          <nav className="hidden md:flex items-center font-bold gap-6">
            <Link href="/">Home</Link>
            <Link href="/about">About Me</Link>
            <Link href="/education">Education</Link>
            <Link href="/work">Work</Link>
            <Link href="/fun-projects">Fun Projects</Link>
            <SwitchToggle/>
          </nav>

          {/* Timer or other content */}
          <Timer/>





        {/* Bouton pour le menu mobile */}
          <div className="md:hidden relative">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="p-2 "
          >
            ☰
          </button>

          {/* Menu déroulant */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-600 border rounded-lg shadow-lg">
              <nav className="flex flex-col items-start gap-2 p-4 bg-background">
                <Link href="/" onClick={() => setMenuOpen(false)} className=" hover:text-blue-500">
                  Home
                </Link>
                <Link href="/about" onClick={() => setMenuOpen(false)}  className=" hover:text-blue-500">
                  About Me
                </Link>
                <Link href="/education" onClick={() => setMenuOpen(false)}  className=" hover:text-blue-500">
                  Education
                </Link>
                <Link href="/work" onClick={() => setMenuOpen(false)}  className=" hover:text-blue-500">
                  Work
                </Link>
                <Link href="/fun-projects" onClick={() => setMenuOpen(false)} className=" hover:text-blue-500">
                  Fun Projects
                </Link>
                <SwitchToggle />
              </nav>
            </div>
          )}
        </div>
        </div>

      </header>

    </>
  );
}
