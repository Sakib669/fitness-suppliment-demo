"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { RippedEdge } from "@/components/common/RippedEdge";
import { Product } from "@/data/products";

interface HeroSectionProps {
  onShopNow: () => void;
  onSelectProduct: (product: Product) => void;
  featuredProducts: Product[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onShopNow,
  onSelectProduct,
  featuredProducts,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "DISCOVER YOUR POTENTIAL: ELEVATE YOUR PERFORMANCE!",
      subtitle:
        "The only person you are destined to become is the person you decide to be.",
      productImage: "/images/products/hero-tub-splash.svg",
      productRef: featuredProducts[3] || featuredProducts[0],
      tagline: "Pure Bioavailable Fuel",
    },
    {
      title: "PEAK MUSCLE HYPERTROPHY: ENGINEERED FOR DOMINANCE!",
      subtitle:
        "Scientifically formulated multi-stage protein and micronutrients for accelerated cellular recovery.",
      productImage: "/images/products/mass-gainer.svg",
      productRef: featuredProducts[1] || featuredProducts[0],
      tagline: "Mass Matrix Formula",
    },
    {
      title: "INSTANT CELLULAR HYDRATION: RESTORE YOUR VITAL FORCE!",
      subtitle:
        "Electrolyte-infused cold-filtered whey peptides designed to maximize post-training anabolic response.",
      productImage: "/images/products/recovery-whey.svg",
      productRef: featuredProducts[2] || featuredProducts[0],
      tagline: "Electrolyte Recovery",
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  const activeSlide = heroSlides[currentSlide];

  return (
    <section className="relative bg-[#00843D] text-white overflow-hidden">
      {/* Top Ripped Edge */}
      <RippedEdge position="top" fillColor="#FFFFFF" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12 sm:pt-10 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* Product Showcase Column */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Left arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-1 sm:left-0 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/25 hover:bg-white/35 backdrop-blur-md text-white flex items-center justify-center transition-all duration-200 active:scale-90 border border-white/20 shadow-md"
              aria-label="Previous product"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Central Product Showcase */}
            <div
              onClick={() => onSelectProduct(activeSlide.productRef)}
              className="relative w-full max-w-[280px] sm:max-w-md lg:max-w-lg aspect-square flex items-center justify-center cursor-pointer group"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-2xl sm:blur-3xl scale-90 group-hover:scale-100 transition-transform duration-700 pointer-events-none" />

              <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-4">
                <Image
                  src={activeSlide.productImage}
                  alt={activeSlide.title}
                  width={520}
                  height={520}
                  priority
                  className="w-auto h-full max-h-[260px] sm:max-h-[380px] lg:max-h-[460px] object-contain filter drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
              </div>

              {/* Quick View Tag */}
              <div className="absolute bottom-2 sm:bottom-6 bg-white/95 hover:bg-white text-slate-900 text-[11px] sm:text-xs font-extrabold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg backdrop-blur-md opacity-90 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-forest-600" />
                <span>Quick View Formula</span>
              </div>
            </div>

            {/* Right arrow */}
            <button
              onClick={handleNext}
              className="absolute right-1 sm:right-0 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/25 hover:bg-white/35 backdrop-blur-md text-white flex items-center justify-center transition-all duration-200 active:scale-90 border border-white/20 shadow-md"
              aria-label="Next product"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Typography & CTA Column */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-emerald-900/50 border border-emerald-400/30 px-3 py-1 rounded-full text-emerald-200 text-[11px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-300" />
              <span>{activeSlide.tagline}</span>
            </div>

            {/* H1 Heading */}
            <div className="w-full max-w-2xl">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.12] text-white uppercase font-sans">
                {activeSlide.title}
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-xs sm:text-base lg:text-lg text-emerald-50/90 font-normal max-w-xl leading-relaxed">
              {activeSlide.subtitle}
            </p>

            {/* CTA Button */}
            <div className="pt-1 w-full sm:w-auto">
              <button
                onClick={onShopNow}
                className="w-full sm:w-auto justify-center bg-[#056A33] hover:bg-[#035428] text-white font-extrabold text-xs sm:text-base px-8 py-3.5 sm:px-9 sm:py-4 rounded-xl border border-emerald-400/30 shadow-xl shadow-emerald-950/40 flex items-center gap-2.5 transition-all duration-200 active:scale-95 group"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex items-center justify-center gap-2 mt-6 sm:mt-12">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === idx
                  ? "w-7 sm:w-8 bg-white"
                  : "w-2 sm:w-2.5 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Ripped Edge */}
      <RippedEdge position="bottom" fillColor="#FFFFFF" variant={2} />
    </section>
  );
};
