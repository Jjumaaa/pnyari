"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-[var(--color-sanctuary-blue)] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div>
          <h1 className="text-xl font-bold">
            PCEA NYARI
          </h1>

          <p className="text-sm text-gray-200">
            Church
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="hidden gap-8 md:flex">
          <li>
            <a href="#">Home</a>
          </li>

          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#">Ministries</a>
          </li>

          <li>
            <a href="#">Sermons</a>
          </li>

          <li>
            <a href="#">Events</a>
          </li>

          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden rounded-md bg-[var(--color-ember-crimson)] px-4 py-2 font-medium transition hover:opacity-90 md:block">
          New Here?
        </button>

        {/* Mobile Menu Button */}
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl md:hidden"
        >{isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/20 bg-[var(--color-sanctuary-blue)] md:hidden">
          <ul className="flex flex-col px-6 py-4">
            <li>
              <a className="block py-3" href="#">
                Home
              </a>
            </li>

            <li>
              <a className="block py-3" href="#">
                About
              </a>
            </li>

            <li>
              <a className="block py-3" href="#">
                Ministries
              </a>
            </li>

            <li>
              <a className="block py-3" href="#">
                Sermons
              </a>
            </li>

            <li>
              <a className="block py-3" href="#">
                Events
              </a>
            </li>

            <li>
              <a className="block py-3" href="#">
                Contact
              </a>
            </li>

            <li className="pt-4">
              <button className="w-full rounded-md bg-[var(--color-ember-crimson)] px-4 py-3">
                New Here?
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}