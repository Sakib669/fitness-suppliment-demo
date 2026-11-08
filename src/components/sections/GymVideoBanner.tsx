"use client";

import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { RippedEdge } from "@/components/common/RippedEdge";

interface GymVideoBannerProps {
  onPlayVideo: () => void;
}

export const GymVideoBanner: React.FC<GymVideoBannerProps> = ({
  onPlayVideo,
}) => {
  return (
    <section className="relative overflow-hidden">
      {/* Top Ripped Edge */}
      <RippedEdge position="top" fillColor="#FFFFFF" variant={1} />

      <div className="relative w-full h-[360px] sm:h-[460px] md:h-[520px] bg-slate-900 flex items-center justify-center">
        {/* Background Athlectic Image with Darkened Gym Gradient */}
        <Image
          src="/images/banner/gym-athlete.jpg"
          alt="Athletic Gym Performance"
          fill
          priority
          className="object-cover object-center filter brightness-75 contrast-110"
        />

        {/* Ambient Darkened Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/80" />

        {/* Centered Glowing Emerald Play Button matching the design */}
        <button
          onClick={onPlayVideo}
          className="relative z-10 group focus:outline-none"
          aria-label="Play Gym Performance Film"
        >
          {/* Animated pulse ring */}
          <div className="absolute inset-0 rounded-full bg-forest-500/40 animate-ping scale-110" />

          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-forest-600 group-hover:bg-forest-500 text-white flex items-center justify-center shadow-2xl shadow-forest-600/50 transition-all duration-300 group-hover:scale-110 border-2 border-white/40">
            <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
          </div>
        </button>

        {/* Bottom subtle caption */}
        <div className="absolute bottom-10 text-center text-white/80 text-xs sm:text-sm font-semibold tracking-widest uppercase z-10">
          The Science of Relentless Human Drive
        </div>
      </div>

      {/* Bottom Ripped Edge */}
      <RippedEdge position="bottom" fillColor="#FFFFFF" variant={2} />
    </section>
  );
};
