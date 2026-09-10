import React from "react";
import {
  UtensilsCrossed,
  Flame,
  Sparkles,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <UtensilsCrossed size={18} />,
      number: "01",
      title: "Bahan Berkualitas",
      desc: "Dipilih langsung dari kualitas terbaik setiap hari untuk menjaga cita rasa.",
    },
    {
      icon: <Flame size={18} />,
      number: "02",
      title: "Dibuat Fresh",
      desc: "Disajikan hangat dan fresh langsung dari dapur profesional chef kami.",
    },
    {
      icon: <Sparkles size={18} />,
      number: "03",
      title: "Suasana Nyaman",
      desc: "Ruangan yang estetis dan nyaman untuk momen bersantap terbaik.",
    },
    {
      icon: <ShieldCheck size={18} />,
      number: "04",
      title: "Terpercaya",
      desc: "Ribuan pelanggan setia mempercayakan momen kuliner mereka kepada kami.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="relative flex h-[calc(100vh-4rem)] scroll-mt-16 flex-col justify-center overflow-hidden border-b border-zinc-200 bg-white pt-6 pb-4"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-orange-100/50 blur-3xl" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto w-full max-w-5xl -translate-y-5 px-5 md:px-8">
        {/* Header */}
        <div className="mb-4 grid gap-3 md:grid-cols-[1fr_280px] md:items-end">
          {/* Title */}
          <div>
            <div className="mb-1.5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-orange-600">
              <span className="h-px w-6 bg-orange-600" />
              <span>Why NomNom</span>
            </div>

            <h2 className="max-w-xl text-2xl font-black leading-[1.05] tracking-tight text-zinc-900 sm:text-3xl md:text-4xl">
              Alasan untuk
              <span className="block text-orange-600">kembali lagi.</span>
            </h2>
          </div>

          {/* Description */}
          <p className="max-w-xs text-xs leading-relaxed text-zinc-500 md:text-right">
            Bukan hanya tentang makanan. Kami memperhatikan setiap detail untuk
            membuat pengalaman bersantapmu terasa berkesan.
          </p>
        </div>

        {/* Feature List */}
        <div className="border-y border-zinc-200">
          {features.map((item, index) => (
            <div
              key={item.number}
              className={`group relative grid gap-3 py-2.5 transition-all duration-300 sm:grid-cols-[60px_45px_1fr_auto] sm:items-center sm:gap-5 ${
                index !== features.length - 1 ? "border-b border-zinc-200" : ""
              }`}
            >
              {/* Number */}
              <span className="text-xl font-black leading-none tracking-tight text-zinc-200 transition-colors duration-300 group-hover:text-orange-200 sm:text-2xl">
                {item.number}
              </span>

              {/* Icon */}
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-all duration-300 group-hover:border-orange-600 group-hover:bg-orange-600 group-hover:text-white">
                {item.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xs font-bold tracking-tight text-zinc-900 transition-colors duration-300 group-hover:text-orange-600 sm:text-sm">
                  {item.title}
                </h3>

                <p className="mt-0.5 max-w-2xl text-xs leading-relaxed text-zinc-500">
                  {item.desc}
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden h-7 w-7 items-center justify-center border border-zinc-200 text-zinc-300 transition-all duration-300 group-hover:border-orange-600 group-hover:bg-orange-600 group-hover:text-white sm:flex">
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400">
            Quality is our standard
          </p>

          <p className="text-[10px] text-zinc-400 sm:text-right">
            Dibuat dengan perhatian pada setiap detail.
          </p>
        </div>
      </div>
    </section>
  );
}
