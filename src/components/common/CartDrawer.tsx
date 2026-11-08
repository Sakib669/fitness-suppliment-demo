"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, CheckCircle2 } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import confetti from "canvas-confetti";

interface CartDrawerProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen: controlledIsOpen,
  onClose: controlledOnClose,
}) => {
  const {
    items,
    isOpen: hookIsOpen,
    setIsOpen: hookSetIsOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    totalCount,
    savings,
  } = useCart();

  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : hookIsOpen;
  const handleClose = () => {
    if (controlledOnClose) {
      controlledOnClose();
    } else {
      hookSetIsOpen(false);
    }
  };

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutDone, setCheckoutDone] = useState(false);

  const freeShippingThreshold = 1845;
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const remainingForFree = Math.max(0, freeShippingThreshold - subtotal);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutDone(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#009E49", "#00843D", "#10B981", "#3B82F6", "#FFB800"],
      });
      setTimeout(() => {
        clearCart();
        setCheckoutDone(false);
        handleClose();
      }, 3500);
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-forest-600" />
              <h2 className="font-bold text-lg text-slate-900">Your Cart</h2>
              <span className="text-xs bg-forest-100 text-forest-800 font-bold px-2 py-0.5 rounded-full">
                {totalCount} items
              </span>
            </div>
            <button
              onClick={handleClose}
              className="p-2 rounded-full hover:bg-slate-200/70 text-slate-500 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Meter */}
          <div className="bg-emerald-50/90 border-b border-emerald-100/60 px-5 py-3 text-xs">
            {remainingForFree > 0 ? (
              <p className="text-emerald-900 font-medium">
                Add <span className="font-bold text-forest-700">₹{remainingForFree}</span> more to get{" "}
                <span className="font-bold text-forest-700">FREE Express Shipping</span>!
              </p>
            ) : (
              <p className="text-emerald-800 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-forest-600" /> You unlocked FREE Express Shipping!
              </p>
            )}
            <div className="w-full h-2 bg-emerald-200/50 rounded-full mt-2 overflow-hidden">
              <div
                className="h-full bg-forest-600 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Items List or Empty State */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {checkoutDone ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-forest-600 rounded-full flex items-center justify-center animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-black text-2xl text-slate-900">Order Placed Successfully!</h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Your performance order is being prepared and will be dispatched via express cold-chain courier.
                </p>
                <div className="text-xs text-slate-400 font-mono">
                  Order Ref: #ZNT-{Math.floor(100000 + Math.random() * 900000)}
                </div>
              </div>
            ) : items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4 text-slate-500">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg text-slate-800">Your cart is empty</h3>
                <p className="text-sm text-slate-500 max-w-xs">
                  Explore our science-backed supplements and elevate your performance today.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-2 bg-forest-600 hover:bg-forest-700 text-white font-semibold text-xs px-5 py-2.5 rounded-full transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              items.map((item, idx) => (
                <div
                  key={`${item.product.id}-${item.selectedFlavor}-${idx}`}
                  className="flex gap-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all"
                >
                  <div className="w-20 h-20 bg-white rounded-xl p-2 flex items-center justify-center shrink-0 border border-slate-100 shadow-sm">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      width={64}
                      height={64}
                      className="w-auto h-full object-contain"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-bold text-xs sm:text-sm text-slate-900 leading-snug line-clamp-2">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.selectedFlavor)}
                          className="text-slate-400 hover:text-red-500 p-1 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                        Flavor: <span className="text-slate-700 font-semibold">{item.selectedFlavor}</span>
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-1.5 border border-slate-200 rounded-lg bg-white px-2 py-1">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.selectedFlavor, item.quantity - 1)
                          }
                          className="text-slate-600 hover:text-slate-900 p-0.5"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-bold text-xs px-2 text-slate-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.selectedFlavor, item.quantity + 1)
                          }
                          className="text-slate-600 hover:text-slate-900 p-0.5"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="font-black text-sm text-slate-900">
                          ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                        </span>
                        {item.product.originalPrice > item.product.price && (
                          <span className="block text-[10px] text-slate-400 line-through">
                            ₹{(item.product.originalPrice * item.quantity).toLocaleString("en-IN")}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Bar */}
          {items.length > 0 && !checkoutDone && (
            <div className="p-5 border-t border-slate-100 bg-slate-50 space-y-3">
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-800">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>
                </div>
                {savings > 0 && (
                  <div className="flex justify-between text-forest-700 font-medium">
                    <span>Total Discount Savings</span>
                    <span>-₹{savings.toLocaleString("en-IN")}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Express Shipping</span>
                  <span className="font-semibold text-slate-800">
                    {subtotal >= freeShippingThreshold ? "FREE" : "₹149"}
                  </span>
                </div>
                <div className="border-t border-slate-200 pt-2 flex justify-between text-base font-black text-slate-900">
                  <span>Order Total</span>
                  <span className="text-forest-700">
                    ₹{(subtotal >= freeShippingThreshold ? subtotal : subtotal + 149).toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              <button
                disabled={isCheckingOut}
                onClick={handleCheckout}
                className="w-full bg-forest-600 hover:bg-forest-700 disabled:opacity-60 text-white font-extrabold text-sm py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-forest-600/25 transition-all duration-200 active:scale-[0.98]"
              >
                {isCheckingOut ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Processing Payment...
                  </span>
                ) : (
                  <>
                    <span>Proceed to Secure Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
