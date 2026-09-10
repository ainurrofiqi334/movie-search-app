import React from "react";
import { Flame, ChevronRight, MapPin, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-4rem)] items-center border-b border-zinc-100 bg-white"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-5 py-8 md:grid-cols-2 md:px-8 lg:gap-12">
        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 border-b border-orange-200 pb-1.5 text-[11px] font-medium text-orange-700">
            <Flame size={13} />
            <span>Spesial Menu Musim Ini</span>
          </div>

          {/* Heading */}
          <h1 className="max-w-xl text-3xl font-black leading-[1.05] tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
            Rasa yang membuat
            <span className="block text-orange-600">ingin kembali.</span>
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-md text-sm leading-6 text-zinc-600">
            Hidangan hangat, bahan pilihan, dan racikan chef yang dibuat dengan
            penuh perhatian. Nikmati pengalaman makan yang sederhana namun
            berkesan bersama NomNom.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="group inline-flex items-center gap-1.5 bg-orange-600 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-orange-700"
            >
              Lihat Menu
              <ChevronRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#location"
              className="inline-flex items-center gap-1.5 border border-zinc-200 px-4 py-2.5 text-xs font-semibold text-zinc-800 transition hover:border-orange-500 hover:bg-zinc-50 hover:text-orange-600"
            >
              <MapPin size={14} />
              Temukan Kami
            </a>
          </div>

          {/* Information */}
          <div className="mt-6 flex max-w-md gap-6 border-t border-zinc-100 pt-4">
            {/* Opening Hours */}
            <div className="flex items-center gap-2.5">
              <Clock size={15} className="shrink-0 text-orange-600" />

              <div>
                <p className="text-[10px] text-zinc-500">Buka setiap hari</p>

                <p className="text-[11px] font-semibold text-zinc-900">
                  10.00 — 22.00
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2.5">
              <MapPin size={15} className="shrink-0 text-orange-600" />

              <div>
                <p className="text-[10px] text-zinc-500">Lokasi</p>

                <p className="text-[11px] font-semibold text-zinc-900">
                  Jakarta
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="relative overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85"
              alt="Hidangan NomNom"
              className="h-[280px] w-full object-cover transition-transform duration-500 hover:scale-[1.02] sm:h-[320px] md:h-[360px]"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
          </div>

          {/* Rating */}
          <div className="absolute bottom-3 left-3 bg-white px-3 py-2.5 shadow-lg">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center bg-orange-600 text-[10px] font-bold text-white">
                4.9
              </div>

              <div>
                <p className="text-[11px] font-bold text-zinc-900">
                  Favorit pelanggan
                </p>

                <p className="text-[9px] text-zinc-500">Ulasan pengunjung</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
