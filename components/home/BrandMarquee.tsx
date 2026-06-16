const BRANDS = ["Veloce", "Apex", "Nordik", "Stride", "Terra", "Pulse", "Kinetik", "Forza"];

export default function BrandMarquee() {
  const doubled = [...BRANDS, ...BRANDS];

  return (
    <section className="brands">
      <div className="label">Nos marques partenaires</div>
      <div className="marquee">
        <div className="track">
          {doubled.map((brand, i) => (
            <span key={i} className="brand-mark">
              <span className="d" />
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
