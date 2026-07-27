"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import navigation from "@/data/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-[var(--color-sanctuary-blue)] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
        <Image
            src="/images/nyarilogo.png"
            alt="PCEA Nyari Church Logo"
            width={50}
            height={50}
            priority
            className="shadow-md rounded-full border-2 border-white object-cover"
        />

        <div>
            <h1 className="text-lg font-bold leading-tight">
            PCEA NYARI CHURCH
            </h1>

            <p className="text-sm text-gray-200">
            Year of Abundance
            </p>
        </div>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden gap-8 md:flex">
          {navigation.map((item) => (
          <li key={item.label}>
          <Link href={item.href}>{item.label}</Link>
          </li>
            ))}
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
            {navigation.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block py-3"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}

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