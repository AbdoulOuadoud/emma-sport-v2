import Link from "next/link";

const SHOP_PHONE = "+229 01 67 58 37 27";
const WHATSAPP = "https://wa.me/2290167583727";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="wrap">
        <div className="top">
          {/* Brand */}
          <div>
            <Link href="/" className="logo">
              <span className="mark" />
              Emma<span className="sport">Sport</span>
            </Link>
            <p className="blurb">
              Entreprise béninoise spécialisée dans les équipements sportifs.
              Produits authentiques, personnalisation sur-mesure, livraison
              sur tout le territoire.
            </p>
            <div className="social">
              <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 9h3V6h-3a4 4 0 0 0-4 4v2H7v3h3v6h3v-6h3l1-3h-4v-2a1 1 0 0 1 1-1z" />
                </svg>
              </a>
              <a href={WHATSAPP} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2zm4.4 12c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.8 1-.3.1-.5 0a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2.1-.1 0-.3 0-.4l-.7-1.7c-.2-.5-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.6 4c2.5 1 2.5.7 3 .6a2.6 2.6 0 0 0 1.7-1.2 2 2 0 0 0 .2-1.2c-.1-.1-.3-.2-.5-.3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Catalogue */}
          <div>
            <h4>Catalogue</h4>
            <ul>
              <li><Link href="/catalogue">Tous les produits</Link></li>
              <li><Link href="/catalogue?sort=createdAt:desc">Nouveautés</Link></li>
              <li><Link href="/catalogue?sort=prix:asc">Petits prix</Link></li>
              <li><Link href="/catalogue?disponible=true">Disponible</Link></li>
            </ul>
          </div>

          {/* Catégories */}
          <div>
            <h4>Catégories</h4>
            <ul>
              <li><Link href="/catalogue?categorie=football">Football</Link></li>
              <li><Link href="/catalogue?categorie=fitness">Fitness & Musculation</Link></li>
              <li><Link href="/catalogue?categorie=trophees">Trophées & Médailles</Link></li>
              <li><Link href="/catalogue?categorie=chaussures">Chaussures de sport</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4>La boutique</h4>
            <div className="contact-line">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Zogbadjè, Route de l&apos;IITA<br />Abomey-Calavi, Bénin</span>
            </div>
            <div className="contact-line">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
              </svg>
              <a href={`tel:${SHOP_PHONE.replace(/\s/g, "")}`}>{SHOP_PHONE}</a>
            </div>
            <div className="contact-line">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <polyline points="12 7 12 12 16 14" />
              </svg>
              <span>Lun – Sam · 9h00 – 21h00 · Dim fermé</span>
            </div>
          </div>
        </div>

        <div className="bottom">
          <span>© 2026 Emma Sport. Tous droits réservés.</span>
          <div style={{ display: "flex", gap: "16px", fontSize: ".82rem" }}>
            <Link href="/contact" style={{ color: "rgba(255,255,255,.5)" }}>Contact</Link>
            <Link href="/a-propos" style={{ color: "rgba(255,255,255,.5)" }}>À propos</Link>
          </div>
          <div className="pay">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Espèces</span>
            <span>Sur place</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
