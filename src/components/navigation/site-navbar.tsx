'use client'


import Link from "next/link";

const Navbar = () => {

  return (
      <nav className="flex justify-between items-center px-6 py-4  sticky top-0 z-50">
        {/* Center: navigation */}
        <ul className="flex space-x-8 text-md">
          <li className="hover:text-blue-500">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="/about">About Me</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="/education">Education</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="/work">Work</Link>
          </li>
          <li className="hover:text-red-500">
            <Link href="/fun-projects">Fun Projects</Link>
          </li>
        </ul>

      </nav>
  );
};

export default Navbar;
