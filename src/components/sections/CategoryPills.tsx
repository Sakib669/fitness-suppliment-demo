"use client";

import React from "react";
import Image from "next/image";
import { CATEGORIES } from "@/data/products";

interface CategoryPillsProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryPills: React.FC<CategoryPillsProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <section className="bg-white py-6 sm:py-10 border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Edge-to-Edge Scroll Container */}
        <div className="-mx-4 px-4 sm:mx-0 sm:px-0 flex items-center justify-start md:justify-between overflow-x-auto pb-2 pt-1 gap-5 sm:gap-8 scroll-smooth no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {CATEGORIES.map((cat) => {
            const isSelected =
              activeCategory.toLowerCase() === cat.name.toLowerCase();

            return (
              <button
                key={cat.name}
                onClick={() => onSelectCategory(cat.name)}
                className="group flex flex-col items-center gap-2.5 shrink-0 focus:outline-none transition-all duration-200 active:scale-95"
              >
                {/* Circular Container */}
                <div
                  className={`w-14 h-14 sm:w-20 sm:h-20 rounded-full flex items-center justify-center p-1 transition-all duration-300 ${
                    isSelected
                      ? "ring-3 sm:ring-4 ring-forest-600 ring-offset-2 scale-105 shadow-md shadow-forest-600/20"
                      : "group-hover:scale-105 group-hover:shadow-lg shadow-xs"
                  }`}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-forest-700 flex items-center justify-center p-2 sm:p-2.5">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      width={52}
                      height={52}
                      className="w-auto h-full object-contain filter drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                      unoptimized
                    />
                  </div>
                </div>

                {/* Label */}
                <span
                  className={`text-[11px] sm:text-sm font-bold tracking-tight capitalize transition-colors whitespace-nowrap ${
                    isSelected
                      ? "text-forest-700 font-extrabold"
                      : "text-slate-800 group-hover:text-forest-600"
                  }`}
                >
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
