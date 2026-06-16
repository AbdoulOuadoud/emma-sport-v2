import type { Metadata } from "next";
import PromoBar from "@/components/home/PromoBar";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "EMMA SPORT — entreprise béninoise spécialisée dans les équipements sportifs de qualité. Découvrez notre histoire, notre mission, nos valeurs et notre engagement pour le développement du sport au Bénin et en Afrique.",
};

const VALUES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Qualité",
    text: "Nous sélectionnons avec exigence des produits répondant aux standards les plus élevés afin de garantir satisfaction, confort et performance.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Professionnalisme",
    text: "Nous accordons une importance particulière à la qualité du service, à la transparence et au respect de nos engagements envers nos clients et partenaires.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: "Innovation",
    text: "Nous restons constamment à l'écoute des évolutions du marché sportif afin de proposer les dernières tendances et les équipements les plus performants.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
      </svg>
    ),
    title: "Engagement",
    text: "Nous soutenons activement le développement du sport à travers l'accompagnement d'événements sportifs, de tournois, d'équipes et d'initiatives favorisant l'épanouissement des jeunes talents.",
  },
];

const PRODUCTS = [
  "Maillots de football authentiques (versions Pro et Supporter)",
  "Jeux de maillots personnalisés pour équipes et compétitions",
  "Crampons et chaussures de sport authentiques",
  "Équipements de fitness et de musculation",
  "Ballons et accessoires sportifs",
  "Tenues d'entraînement",
  "Équipements pour diverses disciplines sportives",
  "Trophées, médailles et récompenses personnalisées",
  "Accessoires et matériels sportifs professionnels",
];

const WHY_CHOOSE = [
  "Produits authentiques et garantis",
  "Large choix d'équipements sportifs",
  "Personnalisation des maillots et équipements",
  "Accompagnement des clubs et organisations sportives",
  "Service client réactif et professionnel",
  "Livraison rapide sur toute l'étendue du territoire",
  "Tarifs compétitifs adaptés aux particuliers et aux organisations",
];

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18" style={{ flexShrink: 0, color: "var(--orange)" }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function AProposPage() {
  return (
    <>
      <PromoBar />
      <Header />
      <main>
        {/* Page hero */}
        <div className="page-hero">
          <div className="wrap">
            <div>
              <span className="eyebrow">Entreprise béninoise · Sport &amp; Performance</span>
              <h1
                className="display"
                style={{ fontSize: "clamp(2rem,5vw,3.6rem)", marginTop: "0.3em" }}
              >
                À propos d&apos;EMMA SPORT
              </h1>
              <p className="lead" style={{ marginTop: "10px", maxWidth: "56ch" }}>
                Votre partenaire de confiance pour tous vos équipements sportifs au Bénin et en Afrique de l&apos;Ouest.
              </p>
            </div>
          </div>
        </div>

        <Breadcrumb items={[{ label: "À propos" }]} />

        {/* Mission section */}
        <section className="section">
          <div className="wrap">
            <div className="about-story">
              <div>
                <span className="eyebrow reveal">Notre mission</span>
                <h2 className="section-title reveal d1">
                  Née pour le sport,<br />
                  <span style={{ color: "var(--orange)" }}>engagée</span> pour vous
                </h2>
                <p
                  className="reveal d2"
                  style={{ color: "var(--muted)", marginTop: "24px", lineHeight: 1.8, maxWidth: "56ch" }}
                >
                  EMMA SPORT est une entreprise béninoise spécialisée dans la commercialisation
                  d&apos;équipements sportifs, de tenues de compétition, d&apos;articles de fitness
                  et d&apos;accessoires destinés aux sportifs, aux clubs, aux associations,
                  aux établissements scolaires, aux entreprises et aux passionnés de sport.
                </p>
                <p
                  className="reveal d2"
                  style={{ color: "var(--muted)", marginTop: "16px", lineHeight: 1.8, maxWidth: "56ch" }}
                >
                  Créée avec l&apos;ambition de contribuer au développement du sport au Bénin
                  et en Afrique, EMMA SPORT s&apos;est progressivement imposée comme une référence
                  dans la fourniture d&apos;équipements sportifs de qualité, alliant authenticité,
                  performance et accessibilité.
                </p>
                <div style={{ marginTop: "36px" }} className="reveal d3">
                  <a href="/catalogue" className="btn btn-orange">
                    Découvrir nos produits
                  </a>
                </div>
              </div>
              <div className="reveal d1">
                <div className="about-story-visual">
                  <div className="ph" style={{ width: "100%", aspectRatio: "4/5", borderRadius: "10px" }}>
                    <span>Photo équipe / boutique 4:5</span>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      right: "-18px",
                      bottom: "-18px",
                      width: "55%",
                      height: "55%",
                      background: "var(--orange)",
                      borderRadius: "10px",
                      zIndex: -1,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products section */}
        <section className="section" style={{ background: "var(--gray-50)" }}>
          <div className="wrap">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "clamp(40px, 6vw, 80px)",
                alignItems: "start",
              }}
            >
              <div>
                <span className="eyebrow reveal">Notre expertise</span>
                <h2 className="section-title reveal d1">
                  Une gamme complète<br />pour chaque discipline
                </h2>
                <p
                  className="reveal d2"
                  style={{ color: "var(--muted)", marginTop: "20px", lineHeight: 1.8 }}
                >
                  Grâce à une sélection rigoureuse de nos produits et à une parfaite compréhension
                  des besoins du marché sportif, nous proposons des équipements adaptés à chaque
                  discipline et à chaque profil.
                </p>
              </div>
              <ul
                className="reveal d1"
                style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}
              >
                {PRODUCTS.map((p) => (
                  <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: "12px", lineHeight: 1.6 }}>
                    <CheckIcon />
                    <span style={{ color: "var(--muted)" }}>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="section about-team" style={{ background: "var(--ink)", color: "#fff" }}>
          <div className="wrap">
            <div style={{ maxWidth: "72ch", margin: "0 auto", textAlign: "center" }}>
              <span className="eyebrow" style={{ color: "var(--orange)" }}>Notre vision</span>
              <h2
                className="section-title"
                style={{ color: "#fff", marginTop: "0.3em", textAlign: "center" }}
              >
                Devenir la référence des équipements sportifs en Afrique de l&apos;Ouest
              </h2>
              <p style={{ color: "rgba(255,255,255,.65)", marginTop: "24px", lineHeight: 1.8 }}>
                En proposant des produits de qualité supérieure, un service irréprochable et des
                solutions adaptées aux besoins des acteurs du monde sportif, EMMA SPORT aspire à
                bâtir une communauté sportive plus forte, plus performante et plus inspirante.
              </p>
              <p style={{ color: "rgba(255,255,255,.65)", marginTop: "16px", lineHeight: 1.8 }}>
                Chez EMMA SPORT, nous croyons fermement que le sport est un puissant levier de
                développement, d&apos;éducation et de cohésion sociale.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section about-values">
          <div className="wrap">
            <div className="section-head">
              <div className="reveal">
                <span className="eyebrow">Nos valeurs</span>
                <h2 className="section-title">Ce qui nous guide</h2>
              </div>
            </div>
            <div className="grid-values">
              {VALUES.map((v) => (
                <div key={v.title} className="value-cell reveal">
                  <div className="icon">{v.icon}</div>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose */}
        <section className="section" style={{ background: "var(--gray-50)" }}>
          <div className="wrap">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "clamp(40px, 6vw, 80px)",
                alignItems: "center",
              }}
            >
              <div>
                <span className="eyebrow reveal">Pourquoi nous choisir</span>
                <h2 className="section-title reveal d1">
                  L&apos;excellence sportive commence par un équipement de qualité
                </h2>
              </div>
              <ul
                className="reveal d1"
                style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}
              >
                {WHY_CHOOSE.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px", lineHeight: 1.6 }}>
                    <CheckIcon />
                    <span style={{ color: "var(--muted)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            background: "var(--orange)",
            padding: "clamp(56px,8vw,96px) 0",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <div className="wrap">
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                textTransform: "uppercase",
                fontSize: "clamp(2rem,5vw,3.4rem)",
                lineHeight: 0.95,
                margin: "0 auto",
                maxWidth: "22ch",
              }}
            >
              Prêt à équiper votre équipe ou votre club ?
            </h2>
            <p style={{ marginTop: "20px", opacity: 0.9, maxWidth: "48ch", margin: "20px auto 0" }}>
              Sportifs, clubs, associations, établissements scolaires ou entreprises — nous avons
              la solution pour chaque besoin.
            </p>
            <div style={{ display: "flex", gap: "14px", justifyContent: "center", marginTop: "36px", flexWrap: "wrap" }}>
              <a href="/contact" className="btn btn-dark">
                Nous contacter
              </a>
              <a href="/catalogue" className="btn btn-outline-white">
                Voir le catalogue
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
