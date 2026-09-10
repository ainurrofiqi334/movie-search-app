import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function MenuCard({ number, title, description, price, image }) {
  return (
    <article className="group border border-zinc-200 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-zinc-900/5">
      {/* IMAGE */}
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Number */}
        <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center bg-white text-[10px] font-bold text-zinc-900 shadow-sm">
          {number}
        </div>

        {/* Arrow */}
        <div className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center bg-white text-zinc-900 opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight size={16} />
        </div>
      </div>

      {/* CONTENT */}
      <div className="px-2 pb-2 pt-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-base font-bold leading-5 text-zinc-900">
            {title}
          </h3>

          <span className="shrink-0 text-sm font-black text-orange-600">
            {price}
          </span>
        </div>

        <p className="mt-2 text-xs leading-5 text-zinc-500">{description}</p>

        {/* Bottom line */}
        <div className="mt-5 flex items-center justify-between border-t border-zinc-100 pt-3">
          <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-400">
            Chef's recommendation
          </span>

          <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
        </div>
      </div>
    </article>
  );
}
