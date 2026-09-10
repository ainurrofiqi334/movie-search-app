import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function MenuSection() {
  const menus = [
    {
      number: "01",
      title: "Signature Beef Steak",
      description:
        "Daging pilihan dengan saus rahasia khas chef yang dibuat untuk memberikan rasa yang kaya dan berkesan.",
      price: "IDR 85.000",
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=85",
    },
    {
      number: "02",
      title: "Crispy Truffle Burger",
      description:
        "Roti lembut dengan daging juicy, keju leleh, dan sentuhan truffle yang membuat setiap gigitan lebih nikmat.",
      price: "IDR 65.000",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
    },
    {
      number: "03",
      title: "Fresh Berry Paradise",
      description:
        "Minuman berry segar dengan perpaduan rasa manis dan asam yang cocok untuk menemani waktu santai.",
      price: "IDR 35.000",
      image:
        "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=85",
    },
  ];

  return (
    <section
      id="menu"
      className="border-b border-zinc-200 bg-white py-14 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        {/* HEADER */}
        <div className="mb-8 grid gap-5 md:grid-cols-[1fr_280px] md:items-end">
          <div>
            <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-orange-600">
              <span className="h-px w-6 bg-orange-600"></span>
              <span>Our Menu</span>
            </div>

            <h2 className="text-3xl font-black leading-[1.05] tracking-tight text-zinc-900 sm:text-4xl">
              Menu
              <span className="text-orange-600"> unggulan.</span>
            </h2>
          </div>

          <p className="max-w-xs text-xs leading-5 text-zinc-500 md:text-right">
            Pilihan rasa yang dibuat dengan bahan berkualitas dan perhatian pada
            setiap detail.
          </p>
        </div>

        {/* MENU LIST */}
        <div className="border-y border-zinc-200">
          {menus.map((menu, index) => (
            <article
              key={menu.number}
              className={`group grid gap-5 py-5 sm:grid-cols-[45px_220px_1fr_auto] sm:items-center sm:gap-6 md:grid-cols-[50px_250px_1fr_auto] ${
                index !== menus.length - 1 ? "border-b border-zinc-200" : ""
              }`}
            >
              {/* NUMBER */}
              <div className="text-2xl font-black leading-none tracking-tight text-zinc-200 transition-colors duration-300 group-hover:text-orange-200 sm:text-3xl">
                {menu.number}
              </div>

              {/* IMAGE */}
              <div className="relative h-40 w-full overflow-hidden sm:h-32 md:h-36">
                <img
                  src={menu.image}
                  alt={menu.title}
                  className="h-full w-full object-cover grayscale transition-all duration-500 ease-out group-hover:scale-105 group-hover:grayscale-0"
                />

                {/* IMAGE OVERLAY */}
                <div className="pointer-events-none absolute inset-0 bg-black/5 transition-colors duration-300 group-hover:bg-transparent" />
              </div>

              {/* CONTENT */}
              <div className="flex min-h-[140px] flex-col justify-center sm:min-h-0">
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-px w-5 bg-orange-600" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-orange-600">
                    NomNom Selection
                  </span>
                </div>

                <h3 className="text-base font-black tracking-tight text-zinc-900 transition-colors duration-300 group-hover:text-orange-600 sm:text-lg">
                  {menu.title}
                </h3>

                <p className="mt-1.5 max-w-md text-[11px] leading-5 text-zinc-500 sm:text-xs">
                  {menu.description}
                </p>

                <div className="mt-4">
                  <span className="text-sm font-black text-zinc-900">
                    {menu.price}
                  </span>
                </div>
              </div>

              {/* ARROW */}
              <div className="flex h-9 w-9 items-center justify-center self-end border border-zinc-200 text-zinc-400 transition-all duration-300 group-hover:border-orange-600 group-hover:bg-orange-600 group-hover:text-white sm:self-center">
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM */}
        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-400">
            Carefully made · Freshly served
          </p>

          <p className="text-[9px] text-zinc-400 sm:text-right">
            Semua menu dibuat fresh setiap hari.
          </p>
        </div>
      </div>
    </section>
  );
}
