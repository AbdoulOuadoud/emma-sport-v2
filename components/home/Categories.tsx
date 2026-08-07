import Link from "next/link";
import Image from "next/image";
import { MOCK_CATEGORIES, MOCK_PRODUCTS } from "@/lib/mock-data";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const DELAYS = ["", "d1", "d2", "d3"];

const CAT_DATA = MOCK_CATEGORIES.map((cat) => {
  const products = MOCK_PRODUCTS.filter((p) => p.categorie.slug === cat.slug);
  const withImage = products.find((p) => p.images.length > 0);
  return {
    slug: cat.slug,
    nom: cat.nom,
    count: products.length,
    image: withImage?.images[0]?.url ?? null,
    imageAlt: withImage?.images[0]?.alt ?? cat.nom,
  };
}).filter((c) => c.count > 0);

export default function Categories() {
  return (
    <section className="section cats" id="categories">
      <div className="wrap">
        <div className="section-head">
          <div className="reveal">
            <span className="eyebrow">Catégories populaires</span>
            <h2 className="section-title">
              Trouvez votre<br />terrain de jeu
            </h2>
          </div>
          <p
            className="lead reveal d1"
            style={{ color: "var(--muted)", alignSelf: "flex-end" }}
          >
            Football, fitness, musculation, trophées et bien plus. Des équipements pour chaque discipline et chaque profil.
          </p>
        </div>

        <div className="grid-cats">
          {CAT_DATA.map((cat, i) => {
            const delay = DELAYS[i % 4];
            return (
              <Link
                key={cat.slug}
                href={`/catalogue?categorie=${cat.slug}`}
                className={`cat-tile reveal${delay ? ` ${delay}` : ""}`}
              >
                {cat.image ? (
                  <Image
                    src={cat.image}
                    alt={cat.imageAlt}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 760px) 100vw, (max-width: 1040px) 50vw, 25vw"
                  />
                ) : (
                  <div className="ph">
                    <span>{cat.nom}</span>
                  </div>
                )}
                <div className="veil" />
                <div className="arrow">
                  <ArrowIcon />
                </div>
                <div className="meta">
                  <div className="h">{cat.nom}</div>
                  <div className="c">
                    {cat.count} article{cat.count > 1 ? "s" : ""}
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
