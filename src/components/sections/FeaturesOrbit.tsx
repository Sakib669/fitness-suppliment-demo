"use client";

import React from "react";
import Image from "next/image";
import { RippedEdge } from "@/components/common/RippedEdge";
import { Dumbbell, Sparkles, Activity, Compass, HeartPulse, Flame } from "lucide-react";

export const FeaturesOrbit: React.FC = () => {
  const leftFeatures = [
    {
      title: "MUSCLE GROWTH AND REPAIR",
      desc: "Proteins like actin and myosin help build and repair muscle tissues.",
      icon: Dumbbell,
    },
    {
      title: "BONE, SKIN, AND HAIR HEALTH",
      desc: "Collagen and keratin support the structure of bones, skin, and hair.",
      icon: Sparkles,
    },
    {
      title: "DIGESTIVE ENZYMES",
      desc: "Proteins like amylase, lipase, and protease break down food into usable nutrients.",
      icon: Activity,
    },
  ];

  const rightFeatures = [
    {
      title: "NUTRIENT TRANSPORT",
      desc: "Proteins like albumin and transferrin transport vitamins, minerals, and hormones.",
      icon: Compass,
    },
    {
      title: "GROWTH HORMONES",
      desc: "Support development, cellular mitosis, and deep systemic tissue repair.",
      icon: HeartPulse,
    },
    {
      title: "BOOSTS METABOLISM",
      desc: "Increases calorie burning through the thermic effect of food (TEF).",
      icon: Flame,
    },
  ];

  return (
    <section className="relative bg-[#00843D] text-white overflow-hidden py-4">
      {/* Top Ripped Edge */}
      <RippedEdge position="top" fillColor="#FFFFFF" variant={2} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight uppercase">
            FEATURES
          </h2>
          <p className="text-emerald-100 text-xs sm:text-sm font-medium mt-1">
            Making our country healthy
          </p>
        </div>

        {/* 3-Column Orbit: Left Features | Center Tub | Right Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Central Tub Showcase (displayed top on mobile, middle on desktop) */}
          <div className="order-1 lg:order-2 lg:col-span-4 flex items-center justify-center my-2 lg:my-0">
            <div className="relative w-full max-w-[260px] sm:max-w-xs md:max-w-sm aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-2xl scale-95" />
              <Image
                src="/images/products/hero-tub-splash.svg"
                alt="Formulation Science"
                width={380}
                height={380}
                className="w-auto h-full max-h-[280px] sm:max-h-[360px] object-contain filter drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                unoptimized
              />
            </div>
          </div>

          {/* Left 3 Features */}
          <div className="order-2 lg:order-1 lg:col-span-4 space-y-6 sm:space-y-8">
            {leftFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 sm:gap-4 text-left group hover:translate-x-1 transition-transform bg-white/5 sm:bg-transparent p-3 sm:p-0 rounded-2xl"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl border border-white/40 bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0 shadow-sm group-hover:bg-white/20 transition-colors">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-xs sm:text-sm tracking-wide text-white uppercase">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-emerald-100/90 leading-relaxed mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right 3 Features */}
          <div className="order-3 lg:order-3 lg:col-span-4 space-y-6 sm:space-y-8">
            {rightFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 sm:gap-4 text-left group hover:-translate-x-1 transition-transform bg-white/5 sm:bg-transparent p-3 sm:p-0 rounded-2xl"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl border border-white/40 bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0 shadow-sm group-hover:bg-white/20 transition-colors">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-xs sm:text-sm tracking-wide text-white uppercase">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-emerald-100/90 leading-relaxed mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Ripped Edge */}
      <RippedEdge position="bottom" fillColor="#FFFFFF" variant={3} />
    </section>
  );
};
