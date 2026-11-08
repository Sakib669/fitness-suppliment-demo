"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { RippedEdge } from "@/components/common/RippedEdge";
import { TESTIMONIALS } from "@/data/blog";

export const TestimonialsSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative bg-[#00843D] text-white overflow-hidden py-4">
      {/* Top Ripped Edge */}
      <RippedEdge position="top" fillColor="#FFFFFF" variant={1} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight uppercase">
            LOVE SHOWN BY OUR MEMBERS
          </h2>
          <div className="w-16 h-1 bg-white/40 mx-auto mt-3 rounded-full" />
        </div>

        {/* Testimonials Carousel Wrapper with Side Arrows */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="hidden md:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white items-center justify-center border border-white/20 shadow-md transition-all active:scale-90"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* 3 White Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {TESTIMONIALS.map((item, idx) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 text-slate-800 shadow-xl flex flex-col justify-between space-y-4 hover:shadow-2xl transition-all duration-300"
              >
                {/* Header: Avatar & Name */}
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-forest-500 shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-black text-sm text-slate-900 uppercase">
                      {item.name}
                    </h3>
                    <p className="text-[11px] font-semibold text-forest-700">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  &ldquo;{item.text}&rdquo;
                </p>

                {/* Bottom: Stars & Quote Mark Icon */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <div className="flex items-center text-amber-400 gap-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <Quote className="w-5 h-5 text-slate-300 rotate-180" />
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="hidden md:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white items-center justify-center border border-white/20 shadow-md transition-all active:scale-90"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIdx === idx
                  ? "w-6 bg-white"
                  : "w-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Ripped Edge */}
      <RippedEdge position="bottom" fillColor="#FFFFFF" variant={2} />
    </section>
  );
};
