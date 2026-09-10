import React, { useState } from "react";
import { Menu, Utensils, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "Menu",
      href: "#menu",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Keunggulan",
      href: "#why-choose-us",
    },
    {
      label: "Testimoni",
      href: "#testimonials",
    },
    {
      label: "FAQ",
      href: "#faq",
    },
    {
      label: "Contact",
      href: "#location",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        {/* =========================
            LOGO
        ========================= */}
        <a
          href="#home"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-2.5"
        >
          <div className="flex h-8 w-8 items-center justify-center bg-orange-600 text-white shadow-sm shadow-orange-500/20">
            <Utensils size={16} />
          </div>

          <span className="text-base font-bold tracking-tight text-zinc-900">
            NomNom<span className="text-orange-600">.</span>
          </span>
        </a>

        {/* =========================
            DESKTOP NAVIGATION
        ========================= */}
        <nav className="hidden items-center gap-6 text-xs font-medium text-zinc-500 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-orange-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* =========================
            DESKTOP CTA
        ========================= */}
        <a
          href="#menu"
          className="hidden bg-orange-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm shadow-orange-500/20 transition hover:bg-orange-700 active:scale-95 md:inline-flex"
        >
          Pesan Sekarang
        </a>

        {/* =========================
            MOBILE BUTTON
        ========================= */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-9 w-9 items-center justify-center border border-zinc-200 text-zinc-700 transition hover:border-orange-500 hover:text-orange-600 md:hidden"
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* =========================
          MOBILE NAVIGATION
      ========================= */}
      {isOpen && (
        <div className="border-t border-zinc-100 bg-white md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-zinc-100 py-3 text-sm font-medium text-zinc-600 transition-colors last:border-0 hover:text-orange-600"
              >
                {item.label}
              </a>
            ))}

            {/* Mobile CTA */}
            <a
              href="#menu"
              onClick={() => setIsOpen(false)}
              className="mt-3 flex items-center justify-center bg-orange-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
            >
              Pesan Sekarang
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
