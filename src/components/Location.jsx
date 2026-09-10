import React from "react";
import { MapPin, Clock, ArrowUpRight, Navigation, Phone } from "lucide-react";

export default function Location() {
  return (
    <section
      id="location"
      className="relative overflow-hidden border-t border-zinc-200 bg-zinc-50 py-14 sm:py-16"
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-orange-100/60 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2 md:px-8 lg:gap-16">
        {/* LEFT CONTENT */}
        <div>
          {/* LABEL */}
          <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-orange-600">
            <span className="h-px w-7 bg-orange-600"></span>
            Find Us
          </div>

          {/* TITLE */}
          <h2 className="max-w-lg text-3xl font-black leading-[1.05] tracking-tight text-zinc-900 sm:text-4xl">
            Datang dan rasakan
            <span className="block text-orange-600">suasana NomNom.</span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-4 max-w-md text-sm leading-6 text-zinc-500">
            Tempat yang nyaman untuk menikmati makanan bersama keluarga, teman,
            maupun rekan kerja. Kami menunggu kedatanganmu.
          </p>

          {/* INFORMATION */}
          <div className="mt-7 space-y-3">
            {/* ADDRESS */}
            <div className="group flex items-start gap-4 border border-zinc-200 bg-white p-4 transition-all duration-300 hover:border-orange-300 hover:shadow-md">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-orange-50 text-orange-600 transition-colors duration-300 group-hover:bg-orange-600 group-hover:text-white">
                <MapPin size={17} />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                  Alamat
                </p>

                <p className="mt-1 text-xs font-semibold leading-5 text-zinc-800">
                  Jl. Kuliner Nusantara No. 88
                  <br />
                  Jakarta Selatan
                </p>
              </div>
            </div>

            {/* OPENING HOURS */}
            <div className="group flex items-start gap-4 border border-zinc-200 bg-white p-4 transition-all duration-300 hover:border-orange-300 hover:shadow-md">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-orange-50 text-orange-600 transition-colors duration-300 group-hover:bg-orange-600 group-hover:text-white">
                <Clock size={17} />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                  Jam Operasional
                </p>

                <p className="mt-1 text-xs font-semibold text-zinc-800">
                  Setiap Hari · 10.00 — 22.00 WIB
                </p>
              </div>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://maps.google.com/?q=Jakarta+Selatan"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 bg-orange-600 px-4 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-600/20 active:scale-95"
            >
              <Navigation size={14} />
              Buka Google Maps
              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="tel:+6281234567890"
              className="inline-flex items-center gap-2 border border-zinc-200 bg-white px-4 py-2.5 text-xs font-bold text-zinc-800 transition-all duration-300 hover:border-orange-300 hover:text-orange-600"
            >
              <Phone size={14} />
              Hubungi Kami
            </a>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative">
          {/* MAIN IMAGE */}
          <div className="relative overflow-hidden border border-zinc-200 bg-white p-2 shadow-xl shadow-zinc-900/5">
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85"
                alt="Suasana restoran NomNom"
                className="h-[300px] w-full object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0 sm:h-[340px]"
              />

              {/* IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* LOCATION LABEL */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <div className="mb-1 flex items-center gap-1.5 text-white">
                    <MapPin size={13} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      NomNom Restaurant
                    </span>
                  </div>

                  <p className="text-[10px] text-white/70">
                    Jakarta Selatan, Indonesia
                  </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center bg-white text-orange-600 shadow-lg">
                  <ArrowUpRight size={15} />
                </div>
              </div>
            </div>
          </div>

          {/* FLOATING OPEN STATUS */}
          <div className="absolute -bottom-4 left-5 flex items-center gap-3 border border-zinc-200 bg-white px-4 py-3 shadow-lg sm:left-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
            </span>

            <div>
              <p className="text-[10px] font-bold text-zinc-900">
                Buka sekarang
              </p>
              <p className="text-[9px] text-zinc-400">Sampai pukul 22.00 WIB</p>
            </div>
          </div>

          {/* SMALL DECORATION */}
          <div className="absolute -right-3 -top-3 h-16 w-16 border-t-2 border-r-2 border-orange-500/30" />
        </div>
      </div>
    </section>
  );
}
