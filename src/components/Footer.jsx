import React from "react";
import { Utensils, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-orange-600 text-white">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        {/* MAIN FOOTER */}
        <div className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr] md:py-14">
          {/* BRAND */}
          <div>
            <div className="mb-5 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center bg-white text-orange-600">
                <Utensils size={17} />
              </div>

              <span className="text-lg font-black tracking-tight">
                NomNom<span className="text-orange-200">.</span>
              </span>
            </div>

            <p className="max-w-sm text-xs leading-5 text-orange-100">
              Hidangan hangat, bahan pilihan, dan racikan chef yang dibuat
              dengan penuh perhatian untuk menciptakan pengalaman bersantap yang
              berkesan.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-orange-200">
              Explore
            </p>

            <div className="flex flex-col gap-2.5 text-xs">
              <a
                href="#home"
                className="w-fit text-orange-50 transition-colors hover:text-white"
              >
                Home
              </a>

              <a
                href="#menu"
                className="w-fit text-orange-50 transition-colors hover:text-white"
              >
                Menu
              </a>

              <a
                href="#about"
                className="w-fit text-orange-50 transition-colors hover:text-white"
              >
                About
              </a>

              <a
                href="#testimonials"
                className="w-fit text-orange-50 transition-colors hover:text-white"
              >
                Testimoni
              </a>
              <a
                href="#faq"
                className="w-fit text-orange-50 transition-colors hover:text-white"
              >
                FAQ
              </a>

              <a
                href="#location"
                className="w-fit text-orange-50 transition-colors hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-orange-200">
              Visit Us
            </p>

            <div className="space-y-3 text-xs text-orange-50">
              <p className="leading-5">
                Jl. Kuliner Nusantara No. 88
                <br />
                Jakarta Selatan
              </p>

              <p>
                Setiap Hari
                <br />
                10.00 — 22.00 WIB
              </p>

              <a
                href="#location"
                className="group inline-flex items-center gap-1.5 font-bold text-white"
              >
                Lihat lokasi
                <ArrowUpRight
                  size={13}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col gap-3 border-t border-orange-500 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] font-medium text-orange-100">
            © {new Date().getFullYear()} NomNom Resto.
          </p>

          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-orange-200">
            Good food
            <span className="mx-2">•</span>
            Good mood
            <span className="mx-2">•</span>
            Good memories
          </p>
        </div>
      </div>
    </footer>
  );
}
