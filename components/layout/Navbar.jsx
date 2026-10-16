"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import navigation from "@/data/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    function closeOnEscape(event) {
      if (event.key === "Escape") setIsOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--color-sanctuary-blue)] text-white shadow-lg shadow-slate-950/10">
      <nav aria-label="Main navigation" className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex min-h-[76px] items-center justify-between gap-4">
          <Link
            href="/"
            onClick={closeMenu}
            className="group flex min-w-0 items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brushed-gold)]"
          >
            <span className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full border border-white/70 bg-white/10 transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12">
              <Image
                src="/images/nyarilogo.png"
                alt="PCEA Nyari Church logo"
                width={48}
                height={48}
                priority
                className="h-full w-full object-cover"
              />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-bold tracking-wide sm:text-base">
                PCEA Nyari Church
              </span>
              <span className="mt-0.5 block text-xs text-white/70 sm:text-sm">
                Year of Abundance
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="inline-flex rounded-md px-3 py-2 text-sm font-medium text-white/80 transition-colors duration-200 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brushed-gold)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link
              href="#new-here"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--color-ember-crimson)] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brushed-gold)]"
            >
              New here? <span aria-hidden="true">→</span>
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/20 text-2xl transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brushed-gold)] lg:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span aria-hidden="true">{isOpen ? "×" : "☰"}</span>
          </button>
        </div>

        {isOpen && (
          <div id="mobile-navigation" className="border-t border-white/15 pb-4 pt-2 lg:hidden">
            <ul className="flex flex-col gap-1">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="block rounded-md px-4 py-3 text-sm font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-[var(--color-brushed-gold)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="#new-here"
                  onClick={closeMenu}
                  className="flex items-center justify-between rounded-md bg-[var(--color-ember-crimson)] px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-[var(--color-brushed-gold)]"
                >
                  New here? Plan your visit <span aria-hidden="true">→</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
