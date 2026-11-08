"use client";

import React from "react";
import Image from "next/image";
import { Truck, ShieldCheck, Headphones, RotateCcw } from "lucide-react";

interface ScienceAboutProps {
  onLearnMore?: () => void;
}

export const ScienceAbout: React.FC<ScienceAboutProps> = ({ onLearnMore }) => {
  const trustBadges = [
    {
      title: "Free Shipping",
      desc: "On orders above ₹1,845",
      icon: Truck,
      color: "bg-emerald-50 text-forest-600",
    },
    {
      title: "Secure Payment",
      desc: "256-bit encrypted checkout",
      icon: ShieldCheck,
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "24/7 Support",
      desc: "Live nutritionist guidance",
      icon: Headphones,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "30-Day Guarantee",
      desc: "Hassle-free 100% refunds",
      icon: RotateCcw,
      color: "bg-rose-50 text-rose-600",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Supplement Pack Visual */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-emerald-50 rounded-full blur-2xl scale-90 -z-10" />
              <Image
                src="/images/products/hero-tub-splash.svg"
                alt="Science Backed Supplements"
                width={480}
                height={480}
                className="w-auto h-full max-h-[420px] object-contain filter drop-shadow-xl"
                unoptimized
              />
            </div>
          </div>

          {/* Right: Editorial Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-black tracking-widest text-slate-500 uppercase">
              About Supplement Store
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight uppercase tracking-tight">
              EMPOWERING WELLNESS THROUGH SCIENCE-BACKED SUPPLEMENTS
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At Supplement Store we&apos;re committed to your well-being through meticulously crafted,
              science-backed supplements. Our mission is to empower you to reach your health goals
              with products that prioritize quality, safety, and effectiveness. Join us and experience
              the difference premium supplements can make in your life.
            </p>

            <div className="pt-2">
              <button
                onClick={onLearnMore}
                className="bg-[#056A33] hover:bg-[#035428] text-white font-extrabold text-xs sm:text-sm px-8 py-3.5 rounded-lg shadow-md transition-all duration-200 active:scale-95"
              >
                About Us
              </button>
            </div>
          </div>
        </div>

        {/* 4 Bottom Trust Badges matching the design */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16 sm:mt-20 pt-10 border-t border-slate-100">
          {trustBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-sm transition-shadow"
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${badge.color}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 leading-tight">
                    {badge.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                    {badge.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
