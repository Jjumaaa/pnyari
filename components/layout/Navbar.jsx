"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import navigation from "@/data/navigation";
import { church } from "@/data/church";
import Icon from "@/components/ui/Icon";

const sectionIds = ["new-here", ...navigation.map((item) => item.href.slice(1))];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link for whichever section is in the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const solid = scrolled || isOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-sanctuary-blue/95 shadow-lg shadow-black/10 backdrop-blur"
          : "bg-gradient-to-b from-sanctuary-deep/70 to-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 text-white sm:px-6 lg:px-8"
      >
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <Image
            src="/images/nyarilogo.png"
            alt=""
            width={48}
            height={48}
            priority
            className="h-11 w-11 shrink-0 rounded-full border-2 border-white/90 bg-white object-contain shadow-md sm:h-12 sm:w-12"
          />
          <span className="min-w-0">
            <span className="block truncate font-[family-name:var(--font-heading)] text-base font-bold leading-tight sm:text-lg">
              {church.name}
            </span>
            {church.theme && (
              <span className="block truncate text-xs text-brushed-gold sm:text-sm">
                {church.theme}
              </span>
            )}
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative rounded-full px-3 py-2 text-sm font-medium transition-colors hover:text-brushed-gold ${
                    isActive ? "text-brushed-gold" : "text-white/90"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#new-here"
            className="hidden rounded-full bg-ember-crimson px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-[#b42222] sm:inline-flex"
          >
            New Here?
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="rounded-full p-2 transition-colors hover:bg-white/10 lg:hidden"
          >
            <Icon name={isOpen ? "close" : "menu"} className="h-7 w-7" />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!isOpen}
        className="border-t border-white/15 bg-sanctuary-blue lg:hidden"
      >
        <ul className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-lg px-3 py-3 font-medium transition-colors hover:bg-white/10 ${
                  active === item.href.slice(1) ? "text-brushed-gold" : "text-white"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pb-2 pt-3">
            <a
              href="#new-here"
              onClick={() => setIsOpen(false)}
              className="block rounded-full bg-ember-crimson px-4 py-3 text-center font-semibold text-white"
            >
              New Here? Plan Your Visit
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
