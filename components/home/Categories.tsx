"use client";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const CATEGORIES = [
  { name: "Football", count: null, delay: "" },
  { name: "Fitness", count: null, delay: "d1" },
  { name: "Musculation", count: null, delay: "d2" },
  { name: "Running", count: null, delay: "d3" },
  { name: "Trophées & Médailles", count: null, delay: "" },
  { name: "Tenues d'entraînement", count: null, delay: "d1" },
  { name: "Chaussures de sport", count: null, delay: "d2" },
  { name: "Accessoires", count: null, delay: "d3" },
];

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
          {CATEGORIES.map((cat) => (
            <a
              key={cat.name}
              href="#"
              className={`cat-tile reveal${cat.delay ? ` ${cat.delay}` : ""}`}
              onClick={(e) => e.preventDefault()}
            >
              <div className="ph">
                <span>{cat.name}</span>
              </div>
              <div className="veil" />
              <div className="arrow">
                <ArrowIcon />
              </div>
              <div className="meta">
                <div className="h">{cat.name}</div>
                {cat.count !== null && <div className="c">{cat.count} articles</div>}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
