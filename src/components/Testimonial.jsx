import React from "react";
import { Star, Quote, ArrowRight } from "lucide-react";

export default function Testimonial() {
  const reviews = [
    {
      name: "Sarah Anindya",
      role: "Pelanggan Setia",
      initial: "SA",
      text: "Tempatnya sangat nyaman untuk makan malam bersama keluarga. Makanannya benar-benar juara rasanya!",
    },
    {
      name: "Rizky Pratama",
      role: "Food Content Creator",
      initial: "RP",
      text: "Pelayanan ramah dan suasananya estetis banget. Cocok buat nongkrong sambil menikmati hidangan lezat.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative flex min-h-[calc(100vh-4rem)] scroll-mt-16 flex-col justify-center overflow-hidden border-b border-zinc-200 bg-white py-12 md:h-[calc(100vh-4rem)] md:py-6"
    >
      {/* =========================
          ORANGE DECORATION
      ========================== */}

      <div className="pointer-events-none absolute -right-24 top-5 h-56 w-56 rounded-full bg-orange-100/60 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-orange-50 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-5xl -translate-y-5 px-5 md:px-8">
        {/* =========================
            HEADER
        ========================== */}

        <div className="mb-4">
          {/* Label */}

          <div className="mb-1.5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-orange-600">
            <span className="h-px w-6 bg-orange-600" />
            <span>Testimonials</span>
          </div>

          {/* Title & Description */}

          <div className="flex flex-col justify-between gap-2 md:flex-row md:items-end">
            <h2 className="max-w-xl text-2xl font-black leading-[1.05] tracking-tight text-zinc-900 sm:text-3xl md:text-4xl">
              Bukan cuma kami{" "}
              <span className="block text-orange-600">yang bilang.</span>
            </h2>

            <p className="max-w-xs text-xs leading-relaxed text-zinc-500 md:text-right">
              Pengalaman dari pelanggan yang sudah merasakan makanan dan suasana
              NomNom.
            </p>
          </div>
        </div>

        {/* =========================
            MAIN CONTENT
        ========================== */}

        <div className="grid gap-4 md:grid-cols-[180px_1fr] md:items-center lg:grid-cols-[220px_1fr]">
          {/* =========================
              LEFT - RATING
          ========================== */}

          <div className="flex flex-row items-center justify-between gap-4 border-y border-zinc-200 py-3 md:flex-col md:items-start md:justify-center md:border-y-0 md:border-r md:py-0 md:pr-6">
            {/* Rating */}

            <div>
              <p className="text-3xl font-black leading-none tracking-tight text-zinc-900 sm:text-4xl">
                4.9
              </p>

              <div className="mt-1.5 flex gap-1 text-orange-500">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={12} className="fill-current" />
                ))}
              </div>
            </div>

            {/* Mobile Divider */}

            <div className="h-8 w-px bg-zinc-200 md:hidden" />

            {/* Customer Count */}

            <div>
              <p className="text-xs font-bold text-zinc-900">1K+ pelanggan</p>

              <p className="mt-0.5 text-[10px] leading-relaxed text-zinc-400">
                Terima kasih atas kepercayaannya.
              </p>
            </div>
          </div>

          {/* =========================
              RIGHT - REVIEWS
          ========================== */}

          <div className="relative">
            {reviews.map((review, index) => (
              <div
                key={review.name}
                className={`group relative ${
                  index !== reviews.length - 1
                    ? "mb-3.5 border-b border-zinc-200/80 pb-3.5"
                    : ""
                }`}
              >
                {/* Top Row */}

                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2 text-orange-500">
                    <Quote size={14} strokeWidth={2} />

                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={10} className="fill-current" />
                      ))}
                    </div>
                  </div>

                  <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-300">
                    0{index + 1}
                  </span>
                </div>

                {/* Quote */}

                <p className="mt-1.5 max-w-xl text-xs font-medium leading-relaxed text-zinc-700 transition-colors duration-300 group-hover:text-zinc-900 sm:text-sm">
                  "{review.text}"
                </p>

                {/* Author */}

                <div className="mt-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    {/* Initial */}

                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 text-[10px] font-bold text-white transition-all duration-300 group-hover:scale-105 group-hover:bg-orange-600">
                      {review.initial}
                    </div>

                    {/* Name & Role */}

                    <div>
                      <p className="text-xs font-bold text-zinc-900">
                        {review.name}
                      </p>

                      <p className="text-[9px] text-zinc-400">{review.role}</p>
                    </div>
                  </div>

                  {/* Read Story */}

                  <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-400 transition-colors duration-300 group-hover:text-orange-600">
                    Read story
                    <ArrowRight
                      size={12}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================
            BOTTOM LINE
        ========================== */}

        <div className="mt-4 flex items-center justify-between border-t border-zinc-200 pt-3">
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Good food
            <span className="mx-2 text-orange-600">•</span>
            Good mood
            <span className="mx-2 text-orange-600">•</span>
            Good memories
          </p>

          <div className="hidden text-[9px] font-bold uppercase tracking-widest text-zinc-300 sm:block">
            NomNom / 2026
          </div>
        </div>
      </div>
    </section>
  );
}
