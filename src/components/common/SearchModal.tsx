"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, X, ArrowUpRight } from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  const filtered = query.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase()) ||
          p.flavors.some((f) => f.toLowerCase().includes(query.toLowerCase()))
      )
    : PRODUCTS.slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20 flex justify-center items-start animate-in fade-in duration-150">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 p-4 border-b border-slate-100">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            placeholder="Search protein, vitamins, gainer, creatine..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full text-base sm:text-lg font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded-full text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold text-slate-500 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg ml-2"
          >
            ESC
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto p-4 divide-y divide-slate-100">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2 pb-2">
            {query.trim() ? `Search Results (${filtered.length})` : "Popular Formulations"}
          </div>

          {filtered.length === 0 ? (
            <div className="py-12 text-center text-slate-500 text-sm">
              No products found matching &quot;{query}&quot;. Try searching for &quot;Whey&quot;, &quot;Creatine&quot;, or &quot;Vitamins&quot;.
            </div>
          ) : (
            filtered.map((prod) => (
              <div
                key={prod.id}
                onClick={() => {
                  onSelectProduct(prod);
                  onClose();
                }}
                className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 cursor-pointer group transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 bg-white rounded-xl p-1.5 border border-slate-100 shadow-sm flex items-center justify-center shrink-0">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      width={40}
                      height={40}
                      className="w-auto h-full object-contain"
                      unoptimized
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 group-hover:text-forest-600 transition-colors">
                      {prod.name}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {prod.category} • {prod.proteinPerServing} Protein • {prod.servingsPerContainer} Servings
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="font-extrabold text-sm text-slate-900">
                      ₹{prod.price.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-forest-600 transition-colors" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
