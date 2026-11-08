"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Star, Heart, ShoppingBag, ShieldCheck, Zap } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
}) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [selectedFlavor, setSelectedFlavor] = useState<string>("");
  const [qty, setQty] = useState(1);

  if (!product) return null;

  const currentFlavor = selectedFlavor || product.flavors[0];
  const isWished = isInWishlist(product.id);

  const handleAdd = () => {
    addToCart(product, qty, currentFlavor);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-12 flex justify-center items-center animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-100 z-10 grid grid-cols-1 md:grid-cols-2 animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 rounded-full bg-slate-100/90 hover:bg-slate-200 text-slate-600 transition-colors shadow-xs"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Product Visual Presentation */}
        <div className="bg-slate-50/80 p-5 sm:p-8 flex flex-col items-center justify-center relative border-b md:border-b-0 md:border-r border-slate-100">
          {product.badge && (
            <span className="absolute top-4 left-4 sm:top-6 sm:left-6 text-[10px] sm:text-xs font-black tracking-wider uppercase px-2.5 py-1 sm:px-3 rounded-full bg-forest-600 text-white shadow-sm">
              {product.badge}
            </span>
          )}

          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 relative flex items-center justify-center py-2 sm:py-4">
            <Image
              src={product.image}
              alt={product.name}
              width={260}
              height={260}
              className="w-auto h-full max-h-48 sm:max-h-64 object-contain filter drop-shadow-xl"
              unoptimized
            />
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 mt-3 sm:mt-4 text-[10px] sm:text-xs font-semibold text-forest-700 bg-forest-50 px-3 py-1.5 rounded-full border border-forest-100 text-center">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-forest-600 shrink-0" />
            <span>Third-Party Lab Tested for Purity & Heavy Metals</span>
          </div>
        </div>

        {/* Right: Formulation Details & Controls */}
        <div className="p-5 sm:p-8 flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-forest-600">
                {product.category}
              </span>
              <h3 className="font-extrabold text-xl sm:text-2xl text-slate-900 mt-1 leading-snug">
                {product.name}
              </h3>

              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-amber-400 text-amber-400"
                          : "text-slate-200"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-bold text-slate-700">
                  {product.rating} ({product.reviewsCount} verified reviews)
                </span>
              </div>
            </div>

            {/* Pricing */}
            <div className="flex items-baseline gap-3">
              <span className="font-black text-2xl sm:text-3xl text-slate-900">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-base text-slate-400 line-through">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </span>
              )}
              {product.discountPercent > 0 && (
                <span className="text-xs font-bold text-forest-700 bg-forest-50 px-2 py-0.5 rounded-md">
                  Save {product.discountPercent}%
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {product.description}
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-100 text-center">
              <div>
                <span className="block text-[10px] text-slate-400 uppercase font-semibold">
                  Protein
                </span>
                <span className="font-extrabold text-sm text-forest-700">
                  {product.proteinPerServing}
                </span>
              </div>
              <div className="border-x border-slate-200">
                <span className="block text-[10px] text-slate-400 uppercase font-semibold">
                  BCAAs
                </span>
                <span className="font-extrabold text-sm text-slate-900">
                  {product.bcaa}
                </span>
              </div>
              <div>
                <span className="block text-[10px] text-slate-400 uppercase font-semibold">
                  Servings
                </span>
                <span className="font-extrabold text-sm text-slate-900">
                  {product.servingsPerContainer}
                </span>
              </div>
            </div>

            {/* Flavor Selection */}
            {product.flavors.length > 0 && (
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Flavor Selection:
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.flavors.map((fl) => (
                    <button
                      key={fl}
                      onClick={() => setSelectedFlavor(fl)}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all ${
                        currentFlavor === fl
                          ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                          : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {fl}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Row */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
            {/* Quantity */}
            <div className="flex items-center border border-slate-200 rounded-xl px-2 py-1.5 bg-slate-50">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="w-7 h-7 flex items-center justify-center text-slate-600 hover:text-slate-900 font-bold"
              >
                -
              </button>
              <span className="w-8 text-center font-bold text-sm text-slate-900">
                {qty}
              </span>
              <button
                onClick={() => setQty(qty + 1)}
                className="w-7 h-7 flex items-center justify-center text-slate-600 hover:text-slate-900 font-bold"
              >
                +
              </button>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAdd}
              className="flex-1 bg-forest-600 hover:bg-forest-700 text-white font-extrabold text-xs sm:text-sm py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-forest-600/25 transition-all duration-200 active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Cart (₹{(product.price * qty).toLocaleString("en-IN")})</span>
            </button>

            {/* Wishlist toggle */}
            <button
              onClick={() => toggleWishlist(product.id)}
              className={`p-3 rounded-xl border transition-colors ${
                isWished
                  ? "bg-red-50 text-red-500 border-red-200"
                  : "bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200"
              }`}
              aria-label="Wishlist"
            >
              <Heart className={`w-5 h-5 ${isWished ? "fill-current" : ""}`} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
