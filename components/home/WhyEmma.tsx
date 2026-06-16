const REASONS = [
  {
    num: "01",
    title: "Produits authentiques",
    text: "Chaque article proposé est authentique et garanti. Qualité, confort et performance au meilleur rapport qualité-prix.",
  },
  {
    num: "02",
    title: "Personnalisation",
    text: "Maillots, tenues et équipements personnalisés à vos couleurs, pour équipes, clubs et compétitions.",
  },
  {
    num: "03",
    title: "Accompagnement clubs",
    text: "Nous équipons clubs, associations, établissements scolaires et entreprises avec des solutions adaptées à chaque organisation.",
  },
  {
    num: "04",
    title: "Livraison partout",
    text: "Service client réactif et livraison rapide sur toute l'étendue du territoire, à tarifs compétitifs.",
  },
];

export default function WhyEmma() {
  return (
    <section className="section why" id="why">
      <div className="wrap">
        <div className="section-head">
          <div className="reveal">
            <span className="eyebrow">Pourquoi Emma Sport</span>
            <h2 className="section-title">
              Pourquoi choisir<br />Emma Sport
            </h2>
          </div>
          <p className="lead reveal d1" style={{ alignSelf: "flex-end" }}>
            Votre partenaire de confiance pour tous vos équipements sportifs au Bénin et en Afrique de l&apos;Ouest.
          </p>
        </div>

        <div className="grid-why reveal d1">
          {REASONS.map((r) => (
            <div key={r.num} className="why-cell">
              <div className="num">{r.num}</div>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
