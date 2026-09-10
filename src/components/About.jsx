import React from "react";
import { ArrowUpRight, Leaf, Users } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-zinc-100 bg-white py-14 scroll-mt-20 md:py-16"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 md:grid-cols-2 md:gap-12 md:px-8 lg:gap-14">
        {/* =========================
            LEFT - IMAGE
        ========================= */}
        <div className="relative flex justify-center md:justify-start">
          {/* Decorative number */}
          <span className="absolute -left-2 -top-4 z-20 select-none text-6xl font-black text-orange-600/10 md:-left-4">
            01
          </span>

          {/* Main image */}
          <div className="relative h-[340px] w-[300px] overflow-hidden rounded-[40%_60%_60%_40%/40%_40%_60%_60%] border-[6px] border-white shadow-xl shadow-zinc-900/10 sm:h-[380px] sm:w-[340px]">
            <img
              src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=85"
              alt="Hidangan makanan NomNom"
              className="h-full w-full object-cover grayscale transition duration-500 hover:scale-105 hover:grayscale-0"
            />
          </div>

          {/* =========================
              FLOATING INFO
          ========================= */}
          <div className="absolute bottom-4 right-2 flex items-center gap-3 border border-zinc-100 bg-white px-4 py-3 shadow-lg sm:right-5">
            <div className="flex h-9 w-9 items-center justify-center bg-orange-600 text-white shadow-sm shadow-orange-500/30">
              <Leaf size={17} />
            </div>

            <div>
              <p className="text-[11px] font-bold text-zinc-900">
                Bahan pilihan
              </p>
              <p className="text-[10px] text-zinc-500">Dari petani lokal</p>
            </div>
          </div>
        </div>

        {/* =========================
            RIGHT - CONTENT
        ========================= */}
        <div className="md:self-start md:pt-3">
          {/* Label */}
          <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-orange-600">
            <span className="h-px w-6 bg-orange-600"></span>
            <span>Our Story</span>
          </div>

          {/* Heading */}
          <h2 className="max-w-lg text-3xl font-black leading-[1.1] tracking-tight text-zinc-900 sm:text-4xl">
            Bukan sekadar
            <span className="block text-orange-600">tempat makan.</span>
          </h2>

          {/* Description */}
          <div className="mt-4 max-w-lg space-y-3 text-sm leading-relaxed text-zinc-600">
            <p>
              NomNom lahir dari kecintaan sederhana terhadap makanan
              berkualitas. Kami percaya bahwa makanan yang baik bukan hanya
              tentang rasa, tetapi juga tentang cerita dan orang yang
              menikmatinya.
            </p>

            <p>
              Setiap hidangan dibuat menggunakan bahan segar pilihan dan
              dipersiapkan dengan penuh perhatian. Dari dapur kami, kami ingin
              menciptakan pengalaman yang membuat kamu ingin datang kembali.
            </p>
          </div>

          {/* =========================
              STATS
          ========================= */}
          <div className="mt-6 grid max-w-md grid-cols-2 border-y border-zinc-100 py-4">
            {/* Customers */}
            <div className="flex items-center gap-3 border-r border-zinc-100 pr-4">
              <Users size={20} className="shrink-0 text-orange-600" />

              <div>
                <p className="text-xl font-black text-zinc-900">1K+</p>

                <p className="text-[10px] font-medium uppercase tracking-wider text-zinc-400">
                  Pelanggan
                </p>
              </div>
            </div>

            {/* Fresh Ingredients */}
            <div className="flex items-center gap-3 pl-5">
              <Leaf size={20} className="shrink-0 text-orange-600" />

              <div>
                <p className="text-xl font-black text-zinc-900">100%</p>

                <p className="text-[10px] font-medium uppercase tracking-wider text-zinc-400">
                  Bahan Segar
                </p>
              </div>
            </div>
          </div>

          {/* =========================
              LINK
          ========================= */}
          <a
            href="#location"
            className="group mt-5 inline-flex items-center gap-3 text-xs font-bold text-zinc-900 transition-colors hover:text-orange-600"
          >
            <span>Kenali NomNom lebih dekat</span>

            <span className="flex h-7 w-7 items-center justify-center border border-zinc-200 transition group-hover:border-orange-600 group-hover:bg-orange-600 group-hover:text-white">
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:rotate-45"
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
