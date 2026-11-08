"use client";

import { useState, useEffect, useCallback } from "react";

const WISHLIST_STORAGE_KEY = "zenith_wishlist_items_v1";
const WISHLIST_UPDATE_EVENT = "zenith_wishlist_updated";

export function useWishlist() {
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const loadFromStorage = useCallback(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = localStorage.getItem(WISHLIST_STORAGE_KEY);
      if (stored) {
        setWishlistIds(JSON.parse(stored));
      } else {
        setWishlistIds([]);
      }
    } catch {
      setWishlistIds([]);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    loadFromStorage();

    const handleStorageChange = () => {
      loadFromStorage();
    };

    window.addEventListener(WISHLIST_UPDATE_EVENT, handleStorageChange);
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener(WISHLIST_UPDATE_EVENT, handleStorageChange);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [loadFromStorage]);

  const toggleWishlist = (productId: string) => {
    const exists = wishlistIds.includes(productId);
    let updated: string[];
    if (exists) {
      updated = wishlistIds.filter((id) => id !== productId);
    } else {
      updated = [...wishlistIds, productId];
    }
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(updated));
      setWishlistIds(updated);
      window.dispatchEvent(new Event(WISHLIST_UPDATE_EVENT));
    } catch (err) {
      console.error("Failed to update wishlist in localStorage", err);
    }
  };

  const isInWishlist = (productId: string) => {
    return wishlistIds.includes(productId);
  };

  return {
    wishlistIds,
    isLoaded,
    toggleWishlist,
    isInWishlist,
    count: wishlistIds.length,
  };
}
