"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/lib/utils";
import OrderModal from "./OrderModal";

export default function CartDrawer() {
  const { items, count, total, isOpen, closeCart, removeFromCart, updateQuantity } = useCart();
  const [orderOpen, setOrderOpen] = useState(false);

  const handleOrder = () => {
    closeCart();
    setOrderOpen(true);
  };

  return (
    <>
      <div className={`cart-drawer${isOpen ? " open" : ""}`}>
        {/* Backdrop */}
        <div className="cart-backdrop" onClick={closeCart} />

        {/* Panel */}
        <div className="cart-panel" role="dialog" aria-modal="true" aria-label="Votre panier">
          {/* Header */}
          <div className="cart-head">
            <div>
              <h2>Votre panier</h2>
              <span className="cart-head-count">
                {count} article{count !== 1 ? "s" : ""}
              </span>
            </div>
            <button className="icon-btn" onClick={closeCart} aria-label="Fermer le panier">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>
          </div>

          {items.length === 0 ? (
            /* Empty state */
            <div className="cart-empty">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              <p className="cart-empty-title">Votre panier est vide</p>
              <p className="cart-empty-sub">Ajoutez des articles depuis le catalogue</p>
              <button className="btn btn-dark" style={{ marginTop: 8 }} onClick={closeCart}>
                Parcourir le catalogue
              </button>
            </div>
          ) : (
            <>
              {/* Items */}
              <div className="cart-items">
                {items.map(({ product, quantity }) => {
                  const price = product.prixPromo ?? product.prix;
                  const img = product.images[0]?.url ?? null;
                  return (
                    <div key={product.id} className="cart-item">
                      <div className="cart-item-img">
                        {img ? (
                          <Image
                            src={img}
                            alt={product.nom}
                            fill
                            style={{ objectFit: "cover" }}
                            sizes="72px"
                          />
                        ) : (
                          <div
                            className="ph"
                            data-init={product.nom[0]}
                            style={{ width: "100%", height: "100%" }}
                          />
                        )}
                      </div>
                      <div className="cart-item-info">
                        <div className="cart-item-name">{product.nom}</div>
                        <div className="cart-item-brand">{product.marque.nom}</div>
                        <div className="cart-item-price">{formatPrice(price)}</div>
                      </div>
                      <div className="cart-item-right">
                        <button
                          className="cart-remove"
                          onClick={() => removeFromCart(product.id)}
                          aria-label="Supprimer"
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6l-1 14H6L5 6" />
                            <path d="M10 11v6M14 11v6" />
                            <path d="M9 6V4h6v2" />
                          </svg>
                        </button>
                        <div className="qty-controls">
                          <button
                            onClick={() => updateQuantity(product.id, quantity - 1)}
                            aria-label="Diminuer la quantité"
                          >
                            −
                          </button>
                          <span>{quantity}</span>
                          <button
                            onClick={() => updateQuantity(product.id, quantity + 1)}
                            aria-label="Augmenter la quantité"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="cart-footer">
                <div className="cart-total">
                  <span className="cart-total-label">Total</span>
                  <span className="cart-total-amount">{formatPrice(total)}</span>
                </div>
                <button className="btn-cart-order" onClick={handleOrder}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Commander via WhatsApp
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {orderOpen && (
        <OrderModal items={items} total={total} onClose={() => setOrderOpen(false)} />
      )}
    </>
  );
}
