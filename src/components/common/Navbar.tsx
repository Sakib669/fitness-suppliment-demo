"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Heart, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";

interface NavbarProps {
  onOpenSearch?: () => void;
  onOpenWishlist?: () => void;
  onOpenCart?: () => void;
  onSelectCategory?: (category: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  onOpenWishlist,
  onOpenCart,
  onSelectCategory,
}) => {
  const { totalCount, setIsOpen: setIsCartOpen } = useCart();
  const { count: wishlistCount } = useWishlist();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    if (onSelectCategory) {
      onSelectCategory(category);
    }
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-shadow duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-forest-600 flex items-center justify-center text-white shadow-md shadow-forest-600/20 group-hover:bg-forest-500 transition-colors">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 stroke-current fill-none stroke-[2.5]"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base sm:text-2xl tracking-tight text-slate-900 group-hover:text-forest-600 transition-colors">
              POWERGEN<span className="text-forest-600 ml-0.5 sm:ml-1">STORE</span>
            </span>
            <span className="hidden sm:inline text-[9px] uppercase tracking-widest text-slate-400 font-semibold -mt-1">
              Pure Performance Fuel
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[13.5px] font-semibold text-slate-700">
          <Link
            href="#products"
            onClick={() => handleCategoryClick("All")}
            className="hover:text-forest-600 transition-colors cursor-pointer"
          >
            All Collection
          </Link>

          {/* Vitamins Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("vitamins")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => handleCategoryClick("Vitamins")}
              className="flex items-center gap-1 hover:text-forest-600 transition-colors"
            >
              <span>Vitamins</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>
            {activeDropdown === "vitamins" && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-slate-100 rounded-xl shadow-xl py-2 px-1 animate-in fade-in slide-in-from-top-2 duration-150">
                <button
                  onClick={() => handleCategoryClick("Vitamins")}
                  className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-forest-50 hover:text-forest-700 rounded-lg"
                >
                  Daily Bio-Vitamins
                </button>
                <button
                  onClick={() => handleCategoryClick("Vitamins")}
                  className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-forest-50 hover:text-forest-700 rounded-lg"
                >
                  Immune Bio-Defense
                </button>
                <button
                  onClick={() => handleCategoryClick("Vitamins")}
                  className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-forest-50 hover:text-forest-700 rounded-lg"
                >
                  Antioxidant Matrix
                </button>
              </div>
            )}
          </div>

          {/* Health Food & Drinks */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("drinks")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => handleCategoryClick("Food & Drink")}
              className="flex items-center gap-1 hover:text-forest-600 transition-colors"
            >
              <span>Health Food & Drinks</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>
            {activeDropdown === "drinks" && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-white border border-slate-100 rounded-xl shadow-xl py-2 px-1 animate-in fade-in slide-in-from-top-2 duration-150">
                <button
                  onClick={() => handleCategoryClick("Food & Drink")}
                  className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-forest-50 hover:text-forest-700 rounded-lg"
                >
                  Electrolyte Energy Drinks
                </button>
                <button
                  onClick={() => handleCategoryClick("Food & Drink")}
                  className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-forest-50 hover:text-forest-700 rounded-lg"
                >
                  High Protein Meal Packs
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => handleCategoryClick("Best Seller")}
            className="flex items-center gap-1 hover:text-forest-600 transition-colors"
          >
            <span>Best Seller</span>
            <span className="text-[10px] bg-red-100 text-red-600 font-bold px-1.5 py-0.5 rounded-full">
              HOT
            </span>
          </button>

          <Link
            href="#products"
            onClick={() => handleCategoryClick("Protein")}
            className="hover:text-forest-600 transition-colors cursor-pointer"
          >
            Protein
          </Link>

          <a href="#about" className="hover:text-forest-600 transition-colors">
            About
          </a>

          <a href="#footer" className="hover:text-forest-600 transition-colors">
            Contact
          </a>
        </nav>

        {/* Right Action Icons */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="p-2 sm:p-2.5 rounded-full hover:bg-slate-100 text-slate-700 transition-colors"
            title="Search Products"
            aria-label="Search"
          >
            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Wishlist Trigger */}
          <button
            onClick={onOpenWishlist}
            className="relative p-2 sm:p-2.5 rounded-full hover:bg-slate-100 text-slate-700 transition-colors"
            title="Wishlist"
            aria-label="Wishlist"
          >
            <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
            {wishlistCount > 0 && (
              <span className="absolute top-1 right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-red-500 text-white text-[9px] sm:text-[10px] font-bold rounded-full flex items-center justify-center animate-in zoom-in">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Trigger */}
          <button
            onClick={onOpenCart ? onOpenCart : () => setIsCartOpen(true)}
            className="relative flex items-center gap-1 sm:gap-2 bg-slate-900 hover:bg-forest-600 text-white px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-full font-semibold text-xs tracking-wide transition-all duration-200 active:scale-95 shadow-sm"
            aria-label="Cart"
          >
            <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Cart</span>
            <span className="w-4 h-4 sm:w-5 sm:h-5 bg-white text-slate-900 rounded-full flex items-center justify-center font-bold text-[9.5px] sm:text-[10.5px]">
              {totalCount}
            </span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
          <Link
            href="#products"
            onClick={() => handleCategoryClick("All")}
            className="font-semibold text-slate-800 text-sm hover:text-forest-600"
          >
            All Collection
          </Link>
          <button
            onClick={() => handleCategoryClick("Vitamins")}
            className="text-left font-semibold text-slate-800 text-sm hover:text-forest-600"
          >
            Vitamins
          </button>
          <button
            onClick={() => handleCategoryClick("Food & Drink")}
            className="text-left font-semibold text-slate-800 text-sm hover:text-forest-600"
          >
            Health Food & Drinks
          </button>
          <button
            onClick={() => handleCategoryClick("Protein")}
            className="text-left font-semibold text-slate-800 text-sm hover:text-forest-600"
          >
            Protein Supplements
          </button>
          <button
            onClick={() => handleCategoryClick("Creatine")}
            className="text-left font-semibold text-slate-800 text-sm hover:text-forest-600"
          >
            Creatine Matrix
          </button>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="font-semibold text-slate-800 text-sm hover:text-forest-600"
          >
            About Us
          </a>
          <a
            href="#footer"
            onClick={() => setMobileMenuOpen(false)}
            className="font-semibold text-slate-800 text-sm hover:text-forest-600"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};
