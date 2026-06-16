"use client";

import { useState } from "react";

type Badge = "vedette" | "promo" | "rupture" | null;

interface Product {
  id: number;
  cat: string;
  catLabel: string;
  brand: string;
  name: string;
  price: string;
  oldPrice?: string;
  badge: Badge;
  badgeLabel?: string;
  init: string;
  label: string;
  stars?: string;
  delay: string;
}

const PRODUCTS: Product[] = [
  { id: 1, cat: "running", catLabel: "Running", brand: "Veloce", name: "Velocity Pro", price: "45 000 F CFA", badge: "vedette", init: "V", label: "Chaussure running", stars: "★★★★★", delay: "" },
  { id: 2, cat: "football", catLabel: "Football", brand: "Forza", name: "Ballon Match Pro", price: "9 000 F CFA", oldPrice: "12 500 F CFA", badge: "promo", badgeLabel: "-28%", init: "F", label: "Ballon football", delay: "d1" },
  { id: 3, cat: "fitness", catLabel: "Fitness", brand: "Pulse", name: "Tapis Grip+", price: "18 000 F CFA", badge: null, init: "T", label: "Tapis fitness", stars: "★★★★☆", delay: "d2" },
  { id: 4, cat: "fitness", catLabel: "Musculation", brand: "Kinetik", name: "Haltères 20kg", price: "35 000 F CFA", badge: "vedette", init: "H", label: "Haltères réglables", stars: "★★★★★", delay: "d3" },
  { id: 5, cat: "basketball", catLabel: "Basketball", brand: "Apex", name: "Maillot Court", price: "12 000 F CFA", badge: null, init: "M", label: "Maillot basket", stars: "★★★★☆", delay: "" },
  { id: 6, cat: "running", catLabel: "Running", brand: "Stride", name: "Veste Aero Wind", price: "23 000 F CFA", oldPrice: "27 000 F CFA", badge: "promo", badgeLabel: "-15%", init: "A", label: "Veste running", delay: "d1" },
  { id: 7, cat: "football", catLabel: "Football", brand: "Veloce", name: "Crampons Strike X", price: "32 000 F CFA", badge: "rupture", badgeLabel: "Bientôt", init: "C", label: "Crampons football", stars: "★★★★★", delay: "d2" },
  { id: 8, cat: "basketball", catLabel: "Basketball", brand: "Apex", name: "Sneakers HighTop", price: "48 000 F CFA", badge: "vedette", init: "S", label: "Sneakers basket", stars: "★★★★★", delay: "d3" },
];

const FILTERS = [
  { key: "all", label: "Tous" },
  { key: "running", label: "Running" },
  { key: "football", label: "Football" },
  { key: "fitness", label: "Fitness" },
  { key: "basketball", label: "Basketball" },
];

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
  </svg>
);

export default function FeaturedProducts() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [quickFeedback, setQuickFeedback] = useState<Set<number>>(new Set());

  const filtered = PRODUCTS.filter(
    (p) => activeFilter === "all" || p.cat === activeFilter
  );

  const toggleFav = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleQuick = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    setQuickFeedback((prev) => new Set(prev).add(id));
    setTimeout(() => {
      setQuickFeedback((prev) => {
        const next = new Set(prev);
        next.delete(id);
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
          {filtered.map((p) => (
            <a
              key={p.id}
              href="#"
              className={`card reveal${p.delay ? ` ${p.delay}` : ""}`}
              onClick={(e) => e.preventDefault()}
            >
              <div className="media">
                {p.badge && (
                  <span className={`badge ${p.badge}`}>
                    {p.badge === "vedette" ? "Vedette" : p.badge === "rupture" ? "Bientôt" : p.badgeLabel}
                  </span>
                )}
                <button
                  className={`fav${favorites.has(p.id) ? " on" : ""}`}
                  aria-label="Ajouter aux favoris"
                  onClick={(e) => toggleFav(e, p.id)}
                >
                  <HeartIcon />
                </button>
                <div className="ph" data-init={p.init}>
                  <span>{p.label}</span>
                </div>
                <button
                  className="quick"
                  style={quickFeedback.has(p.id) ? { background: "var(--orange)" } : undefined}
                  onClick={(e) => handleQuick(e, p.id)}
                >
                  {quickFeedback.has(p.id) ? "Ajouté ✓" : "Aperçu rapide"}
                </button>
              </div>
              <div className="info">
                <div className="cat">
                  {p.catLabel} · {p.brand}
                </div>
                <h3 className="name">{p.name}</h3>
                <div className="row">
                  <span className={`price${p.oldPrice ? " sale" : ""}`}>
                    {p.price}
                  </span>
                  {p.oldPrice && <span className="old">{p.oldPrice}</span>}
                  {p.stars && <span className="stars">{p.stars}</span>}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
