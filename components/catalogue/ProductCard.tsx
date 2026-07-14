"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types";
import { formatPrice, getDiscountPercent } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
  </svg>
);

export default function ProductCard({ product }: ProductCardProps) {
  const [fav, setFav] = useState(false);

  const {
    nom, slug, prix, prixPromo, disponible, vedette,
    categorie, marque, images,
  } = product;

  const discountPct =
    prixPromo ? getDiscountPercent(prix, prixPromo) : null;

  const badge = !disponible
    ? { cls: "rupture", label: "Bientôt" }
    : vedette
    ? { cls: "vedette", label: "Vedette" }
    : discountPct
    ? { cls: "promo", label: `-${discountPct}%` }
    : null;

  const firstImage = images[0]?.url ?? null;

  return (
    <Link
      href={`/produits/${slug}`}
      className="card"
    >
      <div className="media">
        {badge && (
          <span className={`badge ${badge.cls}`}>{badge.label}</span>
        )}
        <button
          className={`fav${fav ? " on" : ""}`}
          aria-label={fav ? "Retirer des favoris" : "Ajouter aux favoris"}
          onClick={(e) => {
            e.preventDefault();
            setFav((v) => !v);
          }}
        >
          <HeartIcon />
        </button>

        {firstImage ? (
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image
              src={firstImage}
              alt={images[0]?.alt ?? nom}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 760px) 50vw, (max-width: 1040px) 33vw, 25vw"
            />
          </div>
        ) : (
          <div className="ph" data-init={nom[0]}>
            <span>{nom}</span>
          </div>
        )}

        <div className="quick">Voir le produit</div>
      </div>

      <div className="info">
        <div className="cat">
          {categorie.nom} · {marque.nom}
        </div>
        <h3 className="name">{nom}</h3>
        <div className="row">
          {prixPromo ? (
            <>
              <span className="price sale">{formatPrice(prixPromo)}</span>
              <span className="old">{formatPrice(prix)}</span>
            </>
          ) : (
            <span className="price">{formatPrice(prix)}</span>
          )}
          {!disponible && (
            <span
              style={{
                marginLeft: "auto",
                fontSize: ".72rem",
                textTransform: "uppercase",
                letterSpacing: ".1em",
                color: "var(--muted)",
              }}
            >
              Indisponible
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
