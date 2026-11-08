"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Mail, CheckCircle2 } from "lucide-react";
import { RippedEdge } from "@/components/common/RippedEdge";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer id="footer" className="relative bg-[#00843D] text-white overflow-hidden">
      {/* Top Ripped Edge */}
      <RippedEdge position="top" fillColor="#FFFFFF" variant={3} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 sm:pt-14 sm:pb-20">
        {/* Newsletter Signup Row */}
        <div className="border-b border-white/20 pb-12 mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <h3 className="font-black text-lg sm:text-xl uppercase tracking-wider text-white">
              SIGN UP TO NEWSLETTER
            </h3>

            {/* Email form */}
            <form
              onSubmit={handleSubscribe}
              className="w-full max-w-md flex items-center bg-white/10 border border-white/30 rounded-xl p-1 backdrop-blur-sm"
            >
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 bg-transparent text-sm text-white placeholder:text-emerald-100/70 focus:outline-none font-medium"
              />
              <button
                type="submit"
                className="bg-white hover:bg-slate-100 text-forest-800 font-extrabold text-xs px-5 py-2.5 rounded-lg transition-colors shrink-0 shadow-sm"
              >
                {subscribed ? (
                  <span className="flex items-center gap-1 text-forest-700">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Subscribed
                  </span>
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>

            {/* Payment Provider Badges matching design */}
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-white text-[#003087] font-black text-[10px] shadow-sm">
                PayPal
              </span>
              <span className="px-2.5 py-1 rounded bg-white text-[#1A1F71] font-black text-[10px] shadow-sm">
                VISA
              </span>
              <span className="px-2.5 py-1 rounded bg-white text-[#EB001B] font-black text-[10px] shadow-sm">
                mastercard
              </span>
              <span className="px-2.5 py-1 rounded bg-white text-[#006699] font-black text-[10px] shadow-sm">
                Maestro
              </span>
              <span className="px-2.5 py-1 rounded bg-white text-[#2E77BC] font-black text-[10px] shadow-sm">
                AMEX
              </span>
            </div>
          </div>
        </div>

        {/* 4 Footer Columns matching design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/15 text-xs sm:text-sm">
          {/* Col 1: Brand & Physical Address */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-white text-forest-700 flex items-center justify-center font-black">
                <svg
                  className="w-5 h-5 stroke-current fill-none stroke-[2.5]"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <span className="font-black text-xl tracking-tight text-white">
                POWERGEN STORE
              </span>
            </Link>

            <div className="space-y-1 text-emerald-100/90 text-xs leading-relaxed">
              <span className="font-bold text-white block">Address:</span>
              <p>
                814-15, 9th Floor, West End Mall, Janakpuri West, New Delhi,
                110058
              </p>
            </div>
          </div>

          {/* Col 2: Collection */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-white">
              COLLECTION
            </h4>
            <ul className="space-y-2 text-emerald-100/80 text-xs">
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Nutrition
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Protein
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Gainer
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Creatine
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Other */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-white">
              Other
            </h4>
            <ul className="space-y-2 text-emerald-100/80 text-xs">
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">
                  Refund Policy
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">
                  Shipping Terms
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">
                  Terms of Service
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Socials */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-white">
              Follow us on:
            </h4>
            <div className="flex items-center gap-3 text-white">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            <div className="pt-2 space-y-1.5 text-xs text-emerald-100/90 font-medium">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" />
                <span>+11-898-788-1234</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5" />
                <span>business@domain.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-100/70">
          <p>Copyright © Powergen Store 2025. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Powered by</span>
            <span className="font-bold text-white">Powergen.com</span>
            <span>&</span>
            <span className="text-white font-semibold">Hermes Engine</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
