"use client";

import { createContext, useContext, useReducer, useState, useEffect } from "react";
import type { Product } from "@/types";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  count: number;
  total: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, qty: number) => void;
  clearCart: () => void;
}

type CartAction =
  | { type: "ADD"; product: Product }
  | { type: "REMOVE"; id: number }
  | { type: "UPDATE"; id: number; qty: number }
  | { type: "CLEAR" };

function cartReducer(items: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "ADD": {
      const idx = items.findIndex((i) => i.product.id === action.product.id);
      if (idx >= 0) {
        return items.map((item, n) =>
          n === idx ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...items, { product: action.product, quantity: 1 }];
    }
    case "REMOVE":
      return items.filter((i) => i.product.id !== action.id);
    case "UPDATE":
      if (action.qty <= 0) return items.filter((i) => i.product.id !== action.id);
      return items.map((i) =>
        i.product.id === action.id ? { ...i, quantity: action.qty } : i
      );
    case "CLEAR":
      return [];
    default:
      return items;
  }
}

function getInitialItems(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem("emma-sport-cart");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, dispatch] = useReducer(cartReducer, [], getInitialItems);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem("emma-sport-cart", JSON.stringify(items));
    } catch {
      // storage unavailable
    }
  }, [items]);

  const count = items.reduce((s, i) => s + i.quantity, 0);
  const total = items.reduce(
    (s, i) => s + (i.product.prixPromo ?? i.product.prix) * i.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        count,
        total,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        addToCart: (product) => dispatch({ type: "ADD", product }),
        removeFromCart: (id) => dispatch({ type: "REMOVE", id }),
        updateQuantity: (id, qty) => dispatch({ type: "UPDATE", id, qty }),
        clearCart: () => dispatch({ type: "CLEAR" }),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
