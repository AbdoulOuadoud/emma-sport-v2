"use client";

import { useState } from "react";
import type { CartItem } from "@/contexts/CartContext";
import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/lib/utils";

const SHOP_WHATSAPP = "2290167583727";

type Mode = "livraison" | "retrait" | null;

interface Props {
  items: CartItem[];
  total: number;
  onClose: () => void;
}

function buildMessage(
  items: CartItem[],
  total: number,
  mode: Mode,
  nom: string,
  tel: string,
  zone: string
): string {
  const lines = items.map(({ product, quantity }) => {
    const price = product.prixPromo ?? product.prix;
    return `• ${product.nom} × ${quantity} — ${formatPrice(price * quantity)}`;
  });

  const dest =
    mode === "livraison"
      ? `📍 *Zone de livraison :* ${zone}`
      : `🏪 *Retrait en boutique*`;

  return [
    `🛍️ *COMMANDE EMMA SPORTS*`,
    ``,
    `👤 *Client :* ${nom}`,
    `📞 *Téléphone :* ${tel}`,
    dest,
    ``,
    `📦 *Articles commandés :*`,
    ...lines,
    ``,
    `━━━━━━━━━━━━`,
    `💰 *Total : ${formatPrice(total)}*`,
    ``,
    `_Commande passée sur emma-sport.bj_`,
  ].join("\n");
}

export default function OrderModal({ items, total, onClose }: Props) {
  const { clearCart } = useCart();
  const [mode, setMode] = useState<Mode>(null);
  const [nom, setNom] = useState("");
  const [tel, setTel] = useState("");
  const [zone, setZone] = useState("");
  const [sent, setSent] = useState(false);

  const canSubmit =
    !!mode && nom.trim() !== "" && tel.trim() !== "" && (mode === "retrait" || zone.trim() !== "");

  const handleSend = () => {
    if (!canSubmit) return;
    const msg = buildMessage(items, total, mode, nom.trim(), tel.trim(), zone.trim());
    const url = `https://wa.me/${SHOP_WHATSAPP}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener");
    setSent(true);
    clearCart();
  };

  return (
    <div
      className="order-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="order-modal" role="dialog" aria-modal="true">
        {/* Header */}
        <div className="order-modal-head">
          <div>
            <h3>Finaliser la commande</h3>
            <p className="sub">
              {items.length} article{items.length > 1 ? "s" : ""} · {formatPrice(total)}
            </p>
          </div>
          <button className="icon-btn" onClick={onClose} aria-label="Fermer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
        </div>

        <div className="order-modal-body">
          {sent ? (
            /* ── Confirmation ── */
            <div className="order-sent">
              <div className="order-sent-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h4>Commande envoyée !</h4>
              <p>
                Votre commande a été transmise sur WhatsApp. La boutique vous
                rappellera pour confirmer la disponibilité et les détails.
              </p>
              <button className="btn btn-dark" style={{ width: "100%", marginTop: 8 }} onClick={onClose}>
                Fermer
              </button>
            </div>
          ) : (
            <>
              {/* ── Step 1 : mode de livraison ── */}
              <p className="order-step-label">Mode de réception</p>
              <div className="delivery-choice">
                <button
                  className={`delivery-btn${mode === "livraison" ? " selected" : ""}`}
                  onClick={() => setMode("livraison")}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="1" y="3" width="15" height="13" rx="1" />
                    <path d="M16 8h4l3 7v3h-7V8z" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                  <span className="lbl">Livraison</span>
                  <span className="sub">À domicile</span>
                </button>
                <button
                  className={`delivery-btn${mode === "retrait" ? " selected" : ""}`}
                  onClick={() => setMode("retrait")}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  <span className="lbl">Retrait</span>
                  <span className="sub">En boutique</span>
                </button>
              </div>

              {/* ── Step 2 : coordonnées ── */}
              {mode && (
                <div className="form-grid" style={{ marginTop: 24 }}>
                  <div className="form-group">
                    <label>Votre nom *</label>
                    <input
                      type="text"
                      placeholder="Ex : Fatima Alabi"
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Numéro WhatsApp *</label>
                    <input
                      type="tel"
                      placeholder="+229 97 00 00 00"
                      value={tel}
                      onChange={(e) => setTel(e.target.value)}
                    />
                  </div>
                  {mode === "livraison" && (
                    <div className="form-group">
                      <label>Zone de livraison *</label>
                      <input
                        type="text"
                        placeholder="Ex : Cotonou, Fidjrossè"
                        value={zone}
                        onChange={(e) => setZone(e.target.value)}
                      />
                    </div>
                  )}
                  <button
                    className="btn-whatsapp-order"
                    onClick={handleSend}
                    disabled={!canSubmit}
                    style={{ opacity: canSubmit ? 1 : 0.45, cursor: canSubmit ? "pointer" : "not-allowed" }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Envoyer la commande
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
