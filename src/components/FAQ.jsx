import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Apakah NomNom buka setiap hari?",
      answer: "Ya. NomNom buka setiap hari mulai pukul 10.00 sampai 22.00 WIB.",
    },
    {
      question: "Apakah tersedia menu untuk vegetarian?",
      answer:
        "Tentu. Kami memiliki beberapa pilihan menu yang dapat disesuaikan untuk pelanggan vegetarian.",
    },
    {
      question: "Apakah bisa memesan makanan untuk takeaway?",
      answer:
        "Bisa. Hampir seluruh menu kami tersedia untuk takeaway. Silakan hubungi kami untuk informasi lebih lanjut.",
    },
    {
      question: "Metode pembayaran apa saja yang tersedia?",
      answer:
        "Kami menerima pembayaran tunai, kartu, dan pembayaran digital seperti QRIS.",
    },
    {
      question: "Apakah NomNom menerima reservasi?",
      answer:
        "Untuk reservasi atau acara khusus, kamu dapat menghubungi tim NomNom melalui kontak yang tersedia di bagian Contact.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden border-b border-zinc-200 bg-white py-14 sm:py-16 md:py-20"
    >
      {/* DECORATION */}
      <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-orange-100/50 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 md:px-8">
        {/* HEADER */}
        <div className="mb-8 grid gap-5 md:grid-cols-[1fr_280px] md:items-end">
          <div>
            <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-orange-600">
              <span className="h-px w-6 bg-orange-600"></span>
              <span>FAQ</span>
            </div>

            <h2 className="text-3xl font-black leading-[1.05] tracking-tight text-zinc-900 sm:text-4xl">
              Ada yang ingin
              <span className="block text-orange-600">kamu tanyakan?</span>
            </h2>
          </div>

          <p className="max-w-xs text-xs leading-5 text-zinc-500 md:text-right">
            Beberapa pertanyaan yang paling sering ditanyakan pelanggan tentang
            NomNom.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="border-y border-zinc-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={
                  index !== faqs.length - 1 ? "border-b border-zinc-200" : ""
                }
              >
                {/* QUESTION */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="group flex w-full items-center justify-between gap-5 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xs font-black transition-colors duration-300 ${
                        isOpen
                          ? "text-orange-600"
                          : "text-zinc-300 group-hover:text-orange-500"
                      }`}
                    >
                      0{index + 1}
                    </span>

                    <span
                      className={`text-sm font-bold transition-colors duration-300 sm:text-base ${
                        isOpen
                          ? "text-orange-600"
                          : "text-zinc-800 group-hover:text-orange-600"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center border transition-all duration-300 ${
                      isOpen
                        ? "border-orange-600 bg-orange-600 text-white"
                        : "border-zinc-200 text-zinc-400 group-hover:border-orange-600 group-hover:text-orange-600"
                    }`}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-5 pl-11 pr-10 sm:pl-12">
                      <p className="max-w-2xl text-xs leading-5 text-zinc-500 sm:text-sm sm:leading-6">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM */}
        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-400">
            Still curious?
          </p>

          <a
            href="#location"
            className="text-[10px] font-bold text-orange-600 transition-colors hover:text-orange-700"
          >
            Hubungi kami →
          </a>
        </div>
      </div>
    </section>
  );
}
