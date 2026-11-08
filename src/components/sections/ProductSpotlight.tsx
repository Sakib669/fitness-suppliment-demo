"use client";

import React from "react";
import Image from "next/image";
import { ShoppingCart, CheckCircle2 } from "lucide-react";
import { SPOTLIGHT_PRODUCT, Product } from "@/data/products";
import { useCart } from "@/hooks/useCart";

interface ProductSpotlightProps {
  onOpenQuickView: (product: Product) => void;
}

export const ProductSpotlight: React.FC<ProductSpotlightProps> = ({
  onOpenQuickView,
}) => {
  const { addToCart } = useCart();

  // Create standard product object for cart compatibility
  const spotlightItem: Product = {
    id: SPOTLIGHT_PRODUCT.id,
    name: SPOTLIGHT_PRODUCT.name,
    slug: SPOTLIGHT_PRODUCT.slug,
    category: "Protein",
    price: SPOTLIGHT_PRODUCT.price,
    originalPrice: SPOTLIGHT_PRODUCT.originalPrice,
    discountPercent: SPOTLIGHT_PRODUCT.discountPercent,
    rating: SPOTLIGHT_PRODUCT.rating,
    reviewsCount: SPOTLIGHT_PRODUCT.reviewsCount,
    image: SPOTLIGHT_PRODUCT.image,
    badge: "Best Seller",
    description:
      "Optimum Gold Biomass combines ultra-filtered whey protein concentrate, complex glycogen-restoring carbohydrates, and active electrolytes for elite post-workout muscular restoration.",
    servingSize: "30g (1 Scoop)",
    servingsPerContainer: 33,
    proteinPerServing: "24g",
    bcaa: "5.5g",
    flavors: ["Rich Chocolate Fudge", "Vanilla Bean Swirl"],
    features: [
      "Whey Protein Concentrate",
      "Fast-Acting Carbohydrates",
      "Cellular Electrolyte Matrix",
    ],
  };

  const handleOrderNow = () => {
    addToCart(spotlightItem, 1);
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Big Detailed Tub with metallic sheen */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div
              onClick={() => onOpenQuickView(spotlightItem)}
              className="relative w-full max-w-sm sm:max-w-md aspect-square flex items-center justify-center cursor-pointer group"
            >
              <div className="absolute inset-0 bg-amber-400/10 rounded-full blur-3xl scale-90 group-hover:scale-100 transition-transform duration-500" />
              <Image
                src={SPOTLIGHT_PRODUCT.image}
                alt={SPOTLIGHT_PRODUCT.name}
                width={420}
                height={480}
                className="w-auto h-full max-h-[300px] sm:max-h-[420px] object-contain filter drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
                unoptimized
              />
            </div>
          </div>

          {/* Right: Technical Specs, Bullets & Order Now */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            <div>
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight uppercase">
                {SPOTLIGHT_PRODUCT.name}
              </h2>

              {/* Price Row matching the design: ₹ 1199 with crossed 1399 */}
              <div className="flex items-baseline gap-2.5 sm:gap-3 mt-2 sm:mt-3">
                <span className="text-xl sm:text-3xl font-black text-slate-900">
                  ₹ {SPOTLIGHT_PRODUCT.price}
                </span>
                <span className="text-xs sm:text-base font-semibold text-slate-400 line-through">
                  ₹ {SPOTLIGHT_PRODUCT.originalPrice}
                </span>
                <span className="text-[11px] sm:text-xs font-bold text-forest-700 bg-forest-50 px-2 py-0.5 rounded">
                  Save {SPOTLIGHT_PRODUCT.discountPercent}%
                </span>
              </div>
            </div>

            {/* Bullet List matching screenshot exactly */}
            <div className="space-y-3 sm:space-y-4 pt-1">
              {SPOTLIGHT_PRODUCT.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 sm:gap-3">
                  <div className="mt-1 text-slate-400 shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-forest-600" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-900 font-bold">
                      {item.title}:
                    </strong>{" "}
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Order Now CTA Button with Truck/Cart Icon */}
            <div className="pt-2 sm:pt-4">
              <button
                onClick={handleOrderNow}
                className="w-full sm:w-auto justify-center bg-[#056A33] hover:bg-[#035428] text-white font-extrabold text-xs sm:text-sm px-8 py-3.5 rounded-xl sm:rounded-lg shadow-lg shadow-forest-600/20 flex items-center gap-2.5 transition-all duration-200 active:scale-95"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Order Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
