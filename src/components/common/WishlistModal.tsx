"use client";

import React from "react";
import Image from "next/image";
import { X, Heart, ShoppingBag, Trash2 } from "lucide-react";
import { useWishlist } from "@/hooks/useWishlist";
import { useCart } from "@/hooks/useCart";
import { PRODUCTS, Product } from "@/data/products";

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuickView?: (product: Product) => void;
}

export const WishlistModal: React.FC<WishlistModalProps> = ({
  isOpen,
  onClose,
  onOpenQuickView,
}) => {
  const { wishlistIds, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (!isOpen) return null;

  const wishedProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500 fill-red-500" />
              <h2 className="font-bold text-lg text-slate-900">Your Wishlist</h2>
              <span className="text-xs bg-red-100 text-red-700 font-bold px-2 py-0.5 rounded-full">
                {wishedProducts.length} items
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-200/70 text-slate-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {wishedProducts.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4 text-slate-500">
                <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-red-400">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg text-slate-800">No items saved yet</h3>
                <p className="text-sm text-slate-500 max-w-xs">
                  Tap the heart icon on any supplement card to save it for later.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 bg-slate-900 hover:bg-forest-600 text-white font-semibold text-xs px-5 py-2.5 rounded-full transition-colors"
                >
                  Browse Catalog
                </button>
              </div>
            ) : (
              wishedProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all"
                >
                  <div
                    onClick={() => {
                      onClose();
                      onOpenQuickView?.(product);
                    }}
                    className="w-20 h-20 bg-white rounded-xl p-2 flex items-center justify-center shrink-0 border border-slate-100 shadow-sm cursor-pointer hover:opacity-90"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={64}
                      height={64}
                      className="w-auto h-full object-contain"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4
                          onClick={() => {
                            onClose();
                            onOpenQuickView?.(product);
                          }}
                          className="font-bold text-xs sm:text-sm text-slate-900 leading-snug line-clamp-2 cursor-pointer hover:text-forest-600"
                        >
                          {product.name}
                        </h4>
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className="text-slate-400 hover:text-red-500 p-1 transition-colors"
                          title="Remove from wishlist"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                        {product.category} • {product.proteinPerServing} Protein
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div>
                        <span className="font-black text-sm text-slate-900">
                          ₹{product.price.toLocaleString("en-IN")}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="ml-2 text-[10px] text-slate-400 line-through">
                            ₹{product.originalPrice.toLocaleString("en-IN")}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => {
                          addToCart(product, 1);
                        }}
                        className="flex items-center gap-1.5 bg-forest-600 hover:bg-forest-700 text-white font-bold text-xs px-3 py-1.5 rounded-lg shadow-sm transition-colors active:scale-95"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
