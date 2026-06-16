export default function Hero() {
  return (
    <section className="hero">
      <div className="ghost" aria-hidden="true">SPORT</div>
      <div className="wrap">
        {/* Copy */}
        <div className="hero-copy">
          <span className="eyebrow reveal">Catalogue Sport · Saison 2026</span>
          <h1 className="display reveal d1">
            Équipez-vous<br />
            <span className="o">comme un</span><br />
            <span className="stroke">champion</span>
          </h1>
          <p className="lead reveal d2">
            Équipements authentiques pour sportifs, clubs, associations et
            établissements scolaires. Personnalisation sur-mesure, livraison
            rapide sur tout le territoire.
          </p>
          <div className="cta reveal d2">
            <a href="#featured" className="btn btn-orange">
              Découvrir le catalogue
              <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#categories" className="btn btn-ghost">
              Voir les catégories
            </a>
          </div>
          <div className="hero-stats reveal d3">
            <div className="stat">
              <div className="n">9<span className="u">+</span></div>
              <div className="l">Disciplines</div>
            </div>
            <div className="stat">
              <div className="n">100<span className="u">%</span></div>
              <div className="l">Authentique</div>
            </div>
            <div className="stat">
              <div className="n"><span className="u">Tout</span></div>
              <div className="l">Le territoire</div>
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="hero-visual reveal d2">
          <div className="block" aria-hidden="true" />
          <div className="frame">
            <div className="ph">
              <span>Visuel héro · photo produit 4:5</span>
            </div>
          </div>
          <div className="hero-badge">
            <span className="pulse" />
            Nouveautés 2026
          </div>
          <div className="hero-tag">
            <div className="t">Velocity Pro</div>
            <div className="p">45 000 F CFA</div>
          </div>
        </div>
      </div>
    </section>
  );
}
