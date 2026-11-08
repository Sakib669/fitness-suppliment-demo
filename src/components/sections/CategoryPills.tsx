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
    <section className="bg-white py-8 sm:py-12 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between overflow-x-auto pb-4 pt-1 sm:pb-0 gap-6 sm:gap-8 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isSelected =
              activeCategory.toLowerCase() === cat.name.toLowerCase();

            return (
              <button
                key={cat.name}
                onClick={() => onSelectCategory(cat.name)}
                className="group flex flex-col items-center gap-3 shrink-0 focus:outline-none transition-all duration-200"
              >
                {/* Circular Container */}
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center p-1.5 transition-all duration-300 ${
                    isSelected
                      ? "ring-4 ring-forest-600 ring-offset-2 scale-105 shadow-md shadow-forest-600/20"
                      : "group-hover:scale-105 group-hover:shadow-lg shadow-sm"
                  }`}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-forest-700 flex items-center justify-center p-2.5">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      width={56}
                      height={56}
                      className="w-auto h-full object-contain filter drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                      unoptimized
                    />
                  </div>
                </div>

                {/* Label */}
                <span
                  className={`text-xs sm:text-sm font-bold tracking-tight capitalize transition-colors ${
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
