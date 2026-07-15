"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-sanctuary-blue text-white p-5">
      <div className="flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          PCEA Nyari Church
        </h1>

        <ul className="hidden md:flex gap-6">
          <li>Home</li>
          <li>About</li>
          <li>Ministries</li>
          <li>Contact</li>
        </ul>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation menu"
        >
          ☰
        </button>

      </div>


      {menuOpen && (
        <ul className="md:hidden mt-5 space-y-4">
          <li>Home</li>
          <li>About</li>
          <li>Ministries</li>
          <li>Contact</li>
        </ul>
      )}

    </nav>
  );
}