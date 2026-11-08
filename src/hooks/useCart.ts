"use client";

import { useState, useEffect, useCallback } from "react";
import { Product } from "@/data/products";

export interface CartItem {
  product: Product;
  quantity: number;
  selectedFlavor: string;
}

const CART_STORAGE_KEY = "zenith_cart_items_v1";
const CART_UPDATE_EVENT = "zenith_cart_updated";

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const loadFromStorage = useCallback(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        setItems(JSON.parse(stored));
      } else {
        setItems([]);
      }
    } catch {
      setItems([]);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    loadFromStorage();

    const handleStorageChange = () => {
      loadFromStorage();
    };

    window.addEventListener(CART_UPDATE_EVENT, handleStorageChange);
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener(CART_UPDATE_EVENT, handleStorageChange);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [loadFromStorage]);

  const saveToStorage = (newItems: CartItem[]) => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newItems));
      setItems(newItems);
      window.dispatchEvent(new Event(CART_UPDATE_EVENT));
    } catch (err) {
      console.error("Failed to save to localStorage", err);
    }
  };

  const addToCart = (product: Product, quantity = 1, selectedFlavor?: string) => {
    const flavor = selectedFlavor || product.flavors[0] || "Standard";
    const existingIndex = items.findIndex(
      (item) => item.product.id === product.id && item.selectedFlavor === flavor
    );

    let updated: CartItem[];
    if (existingIndex > -1) {
      updated = items.map((item, index) =>
        index === existingIndex
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      updated = [...items, { product, quantity, selectedFlavor: flavor }];
    }

    saveToStorage(updated);
    setIsOpen(true);
  };

  const updateQuantity = (productId: string, selectedFlavor: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, selectedFlavor);
      return;
    }

    const updated = items.map((item) => {
      if (item.product.id === productId && item.selectedFlavor === selectedFlavor) {
        return { ...item, quantity };
      }
      return item;
    });

    saveToStorage(updated);
  };

  const removeFromCart = (productId: string, selectedFlavor: string) => {
    const updated = items.filter(
      (item) => !(item.product.id === productId && item.selectedFlavor === selectedFlavor)
    );
    saveToStorage(updated);
  };

  const clearCart = () => {
    saveToStorage([]);
  };

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const savings = items.reduce(
    (sum, item) =>
      sum + (item.product.originalPrice - item.product.price) * item.quantity,
    0
  );

  return {
    items,
    isLoaded,
    isOpen,
    setIsOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalCount,
    subtotal,
    savings,
  };
}
