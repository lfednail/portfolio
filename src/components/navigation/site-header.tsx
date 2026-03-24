"use client";

import React, { useState } from "react";

import Link from "next/link";
import SiteNavbar from "@/components/navigation/site-navbar";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="flex justify-between items-center px-6 py-4 sticky top-0 z-50">
        <div className="container max-w-screen-4xl flex items-center justify-between">
          {/* Logo or Home Link */}
          <div>
            <Link href="/" className="text-2xl font-bold">
              Fednail<span className="text-blue-600">.LL..</span>{" "}
            </Link>
          </div>

          {/* Navigation for large screens */}
          <nav className="hidden md:flex items-center font-bold gap-6">
            <SiteNavbar />
          </nav>

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
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                <nav className="flex flex-col items-start gap-2 p-4">
                  <Link
                    href="/"
                    onClick={() => setMenuOpen(false)}
                    className=" hover:text-blue-500"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setMenuOpen(false)}
                    className=" hover:text-blue-500"
                  >
                    About Me
                  </Link>
                  <Link
                    href="/education"
                    onClick={() => setMenuOpen(false)}
                    className=" hover:text-blue-500"
                  >
                    Education
                  </Link>
                  <Link
                    href="/work"
                    onClick={() => setMenuOpen(false)}
                    className=" hover:text-blue-500"
                  >
                    Work
                  </Link>
                  <Link
                    href="/fun-projects"
                    onClick={() => setMenuOpen(false)}
                    className=" hover:text-blue-500"
                  >
                    Fun Projects
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
