"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MOCK_PRODUCTS } from "@/lib/mock-data";
import { useCart } from "@/contexts/CartContext";
import { formatPrice, getDiscountPercent } from "@/lib/utils";

const VEDETTE = MOCK_PRODUCTS.filter((p) => p.vedette && p.disponible && p.images.length > 0);

const uniqueCats = [
  ...new Map(VEDETTE.map((p) => [p.categorie.slug, p.categorie])).values(),
];

const FILTERS = [
  { key: "all", label: "Tous" },
  ...uniqueCats.map((c) => ({ key: c.slug, label: c.nom })),
];

const DELAYS = ["", "d1", "d2", "d3"];

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
  </svg>
);

export default function FeaturedProducts() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [added, setAdded] = useState<Set<number>>(new Set());
  const { addToCart } = useCart();

  const filtered = VEDETTE.filter(
    (p) => activeFilter === "all" || p.categorie.slug === activeFilter
  );

  const toggleFav = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleAdd = (e: React.MouseEvent, product: (typeof VEDETTE)[0]) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setAdded((prev) => new Set(prev).add(product.id));
    setTimeout(() => {
      setAdded((prev) => {
        const next = new Set(prev);
        next.delete(product.id);
        return next;
      });
    }, 1100);
  };

  return (
    <section className="section" id="featured">
      <div className="wrap">
        <div className="section-head">
          <div className="reveal">
            <span className="eyebrow">Produits vedettes</span>
            <h2 className="section-title">
              La sélection<br />du moment
            </h2>
          </div>
          <div className="tabs reveal d1">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                className={`tab${activeFilter === f.key ? " active" : ""}`}
                onClick={() => setActiveFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid-products">
          {filtered.map((p, i) => {
            const price = p.prixPromo ?? p.prix;
            const discountPct = p.prixPromo
              ? getDiscountPercent(p.prix, p.prixPromo)
              : null;
            const img = p.images[0]?.url ?? null;
            const delay = DELAYS[i % 4];
            const isAdded = added.has(p.id);

            const badge = discountPct
              ? { cls: "promo", label: `-${discountPct}%` }
              : { cls: "vedette", label: "Vedette" };

            return (
              <Link
                key={p.id}
                href={`/produits/${p.slug}`}
                className={`card reveal${delay ? ` ${delay}` : ""}`}
              >
                <div className="media">
                  <span className={`badge ${badge.cls}`}>{badge.label}</span>
                  <button
                    className={`fav${favorites.has(p.id) ? " on" : ""}`}
                    aria-label="Ajouter aux favoris"
                    onClick={(e) => toggleFav(e, p.id)}
                  >
                    <HeartIcon />
                  </button>
                  {img ? (
                    <div style={{ position: "relative", width: "100%", height: "100%" }}>
                      <Image
                        src={img}
                        alt={p.images[0]?.alt ?? p.nom}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 760px) 50vw, (max-width: 1040px) 33vw, 25vw"
                      />
                    </div>
                  ) : (
                    <div className="ph" data-init={p.nom[0]}>
                      <span>{p.nom}</span>
                    </div>
                  )}
                  <button
                    className={`quick${isAdded ? " added" : ""}`}
                    onClick={(e) => handleAdd(e, p)}
                    aria-label="Ajouter au panier"
                  >
                    {isAdded ? "Ajouté !" : "Ajouter au panier"}
                  </button>
                </div>
                <div className="info">
                  <div className="cat">
                    {p.categorie.nom} · {p.marque.nom}
                  </div>
                  <h3 className="name">{p.nom}</h3>
                  <div className="row">
                    {p.prixPromo ? (
                      <>
                        <span className="price sale">{formatPrice(price)}</span>
                        <span className="old">{formatPrice(p.prix)}</span>
                      </>
                    ) : (
                      <span className="price">{formatPrice(price)}</span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
