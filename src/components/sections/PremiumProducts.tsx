"use client";

import React from "react";
import Image from "next/image";
import { Heart, ShoppingBag } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";

interface PremiumProductsProps {
  products: Product[];
  onOpenQuickView: (product: Product) => void;
}

export const PremiumProducts: React.FC<PremiumProductsProps> = ({
  products,
  onOpenQuickView,
}) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  return (
    <section id="products" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">
            PREMIUM QUALITY PRODUCTS
          </h2>
          <div className="w-16 h-1 bg-forest-600 mx-auto mt-3 rounded-full" />
        </div>

        {/* 3-Column Product Grid with Ice-Blue Rounded Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.slice(0, 3).map((product) => {
            const isWished = isInWishlist(product.id);

            return (
              <div
                key={product.id}
                className="group relative bg-[#EEF3F8] hover:bg-[#E5EDF4] rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col items-center justify-between transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50"
              >
                {/* Top Badges & Wishlist Heart */}
                <div className="w-full flex items-center justify-between mb-2">
                  <div>
                    {product.badge && (
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-white text-slate-800 shadow-sm border border-slate-200/60">
                        {product.badge.toLowerCase()}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`p-2 rounded-full transition-all ${
                      isWished
                        ? "text-red-500 fill-red-500 bg-white shadow-sm"
                        : "text-slate-400 hover:text-red-500 hover:bg-white/80"
                    }`}
                    aria-label="Toggle Wishlist"
                  >
                    <Heart
                      className={`w-5 h-5 ${isWished ? "fill-current" : ""}`}
                    />
                  </button>
                </div>

                {/* Product Image Presentation */}
                <div
                  onClick={() => onOpenQuickView(product)}
                  className="w-full h-52 sm:h-60 relative flex items-center justify-center my-3 cursor-pointer"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={220}
                    height={220}
                    className="w-auto h-full max-h-56 object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>

                {/* Product Details */}
                <div className="w-full text-center mt-3 space-y-2">
                  <h3
                    onClick={() => onOpenQuickView(product)}
                    className="font-bold text-sm sm:text-base text-slate-900 line-clamp-1 hover:text-forest-600 transition-colors cursor-pointer"
                  >
                    {product.name}
                  </h3>

                  {/* Pricing */}
                  <div className="flex items-center justify-center gap-2 text-xs sm:text-sm">
                    <span className="font-semibold text-slate-400 line-through">
                      ₹{product.originalPrice.toLocaleString("en-IN")}.00
                    </span>
                    <span className="font-black text-slate-900">
                      ₹{product.price.toLocaleString("en-IN")}.00
                    </span>
                  </div>

                  {product.discountPercent > 0 && (
                    <span className="inline-block text-[10px] font-bold text-forest-700 bg-white px-2 py-0.5 rounded shadow-2xs">
                      {product.discountPercent}% OFF
                    </span>
                  )}

                  {/* Action Buttons */}
                  <div className="pt-2 flex items-center justify-center gap-2">
                    <button
                      onClick={() => onOpenQuickView(product)}
                      className="px-6 py-2 border border-slate-900 hover:bg-slate-900 hover:text-white text-slate-900 font-bold text-xs rounded transition-colors active:scale-95"
                    >
                      Shop Now
                    </button>
                    <button
                      onClick={() => addToCart(product, 1)}
                      className="p-2 border border-forest-600 bg-forest-600 hover:bg-forest-700 text-white rounded transition-colors active:scale-95 shadow-sm"
                      title="Quick Add to Cart"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
