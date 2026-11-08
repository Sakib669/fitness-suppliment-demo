"use client";

import React, { useState } from "react";
import { TopBar } from "@/components/common/TopBar";
import { Navbar } from "@/components/common/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { CategoryPills } from "@/components/sections/CategoryPills";
import { PremiumProducts } from "@/components/sections/PremiumProducts";
import { MarqueeBanner } from "@/components/sections/MarqueeBanner";
import { ScienceAbout } from "@/components/sections/ScienceAbout";
import { FeaturesOrbit } from "@/components/sections/FeaturesOrbit";
import { RecommendedProducts } from "@/components/sections/RecommendedProducts";
import { GymVideoBanner } from "@/components/sections/GymVideoBanner";
import { ProductSpotlight } from "@/components/sections/ProductSpotlight";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { Footer } from "@/components/common/Footer";

import { CartDrawer } from "@/components/common/CartDrawer";
import { WishlistModal } from "@/components/common/WishlistModal";
import { SearchModal } from "@/components/common/SearchModal";
import { QuickViewModal } from "@/components/common/QuickViewModal";
import { VideoModal } from "@/components/common/VideoModal";
import { ArticleModal } from "@/components/common/ArticleModal";

import { PRODUCTS, Product } from "@/data/products";
import { BlogPost } from "@/data/blog";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  const handleSelectCategory = (category: string) => {
    setActiveCategory(category);
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleShopNow = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredProducts =
    activeCategory === "All" || activeCategory === "Best Seller"
      ? PRODUCTS
      : PRODUCTS.filter(
          (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <main className="overflow-x-hidden w-full max-w-full min-h-screen bg-white">
      {/* 1. Announcement & Contact Bar */}
      <TopBar />

      {/* 2. Main Navigation Header */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onSelectCategory={handleSelectCategory}
      />

      {/* 3. Attention (Hero Section with 3D Showcase & Splash) */}
      <HeroSection
        onShopNow={handleShopNow}
        onSelectProduct={(prod) => setQuickViewProduct(prod)}
        featuredProducts={PRODUCTS}
      />

      {/* 4. Circular Category Pills Bar */}
      <CategoryPills
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* 5. Interest (Premium Quality Products Grid) */}
      <PremiumProducts
        products={filteredProducts.length > 0 ? filteredProducts : PRODUCTS}
        onOpenQuickView={(prod) => setQuickViewProduct(prod)}
      />

      {/* 6. Motivational Ripped Marquee Ticker */}
      <MarqueeBanner />

      {/* 7. Science-Backed Formulation & Trust Badges */}
      <ScienceAbout
        onLearnMore={() => {
          const el = document.getElementById("features");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* 8. Biomechanical Features Orbit with Floating Tub */}
      <div id="features">
        <FeaturesOrbit />
      </div>

      {/* 9. Recommended by Experts Product Slider */}
      <RecommendedProducts
        products={PRODUCTS}
        onOpenQuickView={(prod) => setQuickViewProduct(prod)}
      />

      {/* 10. Desire (Cinematic Gym Video Banner with Play Modal) */}
      <GymVideoBanner onPlayVideo={() => setIsVideoOpen(true)} />

      {/* 11. Optimum Nutrition Gold Single Product Spotlight */}
      <ProductSpotlight
        onOpenQuickView={(prod) => setQuickViewProduct(prod)}
      />

      {/* 12. Testimonials (Love Shown by Our Members) */}
      <TestimonialsSection />

      {/* 13. Latest News & Articles Blog Row */}
      <BlogSection
        onSelectPost={(post) => setSelectedArticle(post)}
        onViewAll={() => setSelectedArticle(PRODUCTS.length > 0 ? null : null)}
      />

      {/* 14. Action (Newsletter & Multi-Column Footer) */}
      <Footer />

      {/* Interactive Drawers & Modals (LocalStorage Powered) */}
      <CartDrawer />

      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        onOpenQuickView={(prod) => setQuickViewProduct(prod)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(prod) => setQuickViewProduct(prod)}
      />

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />

      <ArticleModal
        post={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </main>
  );
}
