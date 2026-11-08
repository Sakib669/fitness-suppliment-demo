"use client";

import React from "react";
import { RippedEdge } from "@/components/common/RippedEdge";
import { Zap, Flame, Trophy } from "lucide-react";

export const MarqueeBanner: React.FC = () => {
  const tickerItems = [
    {
      text: "UNLOCK YOUR POTENTIAL, ONE DOSE AT A TIME!",
      icon: Zap,
    },
    {
      text: "STRONGER EVERY DAY, NATURALLY!",
      icon: Trophy,
    },
    {
      text: "FUEL YOUR BODY, ELEVATE YOUR LIFE!",
      icon: Flame,
    },
  ];

  return (
    <section className="relative bg-[#00843D] text-white overflow-hidden py-3">
      {/* Top Ripped Edge */}
      <RippedEdge position="top" fillColor="#FFFFFF" variant={3} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
          {tickerItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 text-white text-xs sm:text-sm lg:text-[13px] font-black tracking-wider uppercase"
              >
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Icon className="w-3.5 h-3.5 text-white" />
                </div>
                <span>{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Ripped Edge */}
      <RippedEdge position="bottom" fillColor="#FFFFFF" variant={1} />
    </section>
  );
};
