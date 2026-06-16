import type { Metadata } from "next";
import PromoBar from "@/components/home/PromoBar";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez EMMA SPORT — équipements sportifs au Bénin. Clubs, associations, établissements scolaires, entreprises et particuliers. Téléphone, WhatsApp ou email. Réponse rapide garantie.",
};

const SHOP_PHONE = "+229 01 67 58 37 27";
const SHOP_PHONE_TEL = "+2290167583727";
const WHATSAPP = "https://wa.me/2290167583727";

const HOURS = [
  { day: "Lundi", time: "09h00 – 21h00" },
  { day: "Mardi", time: "09h00 – 21h00" },
  { day: "Mercredi", time: "09h00 – 21h00" },
  { day: "Jeudi", time: "09h00 – 21h00" },
  { day: "Vendredi", time: "09h00 – 21h00" },
  { day: "Samedi", time: "09h00 – 21h00" },
  { day: "Dimanche", time: "Fermé" },
];

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2zm4.4 12c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.8 1-.3.1-.5 0a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2.1-.1 0-.3 0-.4l-.7-1.7c-.2-.5-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.6 4c2.5 1 2.5.7 3 .6a2.6 2.6 0 0 0 1.7-1.2 2 2 0 0 0 .2-1.2c-.1-.1-.3-.2-.5-.3z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export default function ContactPage() {
  return (
    <>
      <PromoBar />
      <Header />
      <main>
        {/* Page hero */}
        <div className="page-hero">
          <div className="wrap">
            <div>
              <span className="eyebrow">Emma Sport</span>
              <h1
                className="display"
                style={{ fontSize: "clamp(2rem,5vw,3.6rem)", marginTop: "0.3em" }}
              >
                Contactez-nous
              </h1>
              <p className="lead" style={{ marginTop: "10px" }}>
                Sportifs, clubs, associations, établissements scolaires ou entreprises — notre équipe est à votre écoute.
              </p>
            </div>
          </div>
        </div>

        <Breadcrumb items={[{ label: "Contact" }]} />

        <section className="section">
          <div className="wrap">
            <div className="contact-layout">
              {/* Form */}
              <div className="contact-form-card">
                <h2>Envoyer un message</h2>
                <p className="sub">
                  Remplissez le formulaire ci-dessous et nous vous répondrons
                  dans les plus brefs délais.
                </p>
                <ContactForm />
              </div>

              {/* Info panel */}
              <div className="contact-info-panel">
                {/* Quick links */}
                <div className="contact-info-card">
                  <h3>Nous joindre directement</h3>

                  <div className="contact-info-item">
                    <div className="icon-wrap">
                      <WhatsAppIcon />
                    </div>
                    <div className="content">
                      <div className="lbl">WhatsApp (réponse rapide)</div>
                      <a
                        href={WHATSAPP}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ouvrir la conversation →
                      </a>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="icon-wrap">
                      <PhoneIcon />
                    </div>
                    <div className="content">
                      <div className="lbl">Téléphone</div>
                      <a href={`tel:${SHOP_PHONE_TEL}`}>{SHOP_PHONE}</a>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="icon-wrap">
                      <MailIcon />
                    </div>
                    <div className="content">
                      <div className="lbl">Email</div>
                      <a href="mailto:contact@emma-sport.bj">
                        contact@emma-sport.bj
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="contact-info-card">
                  <h3>Notre boutique</h3>
                  <div className="contact-info-item">
                    <div className="icon-wrap">
                      <MapPinIcon />
                    </div>
                    <div className="content">
                      <div className="lbl">Adresse</div>
                      <span>
                        Zogbadjè, Route de l&apos;IITA (Pavé IITA)
                        <br />
                        À côté de l&apos;École Bilingue Benedictus, en face de l&apos;INRAB
                        <br />
                        Abomey-Calavi, Bénin
                      </span>
                    </div>
                  </div>

                  <div className="map-placeholder">
                    <MapPinIcon />
                    <span>Zogbadjè, Pavé IITA · Abomey-Calavi</span>
                  </div>
                </div>

                {/* Hours */}
                <div className="contact-info-card">
                  <h3>Horaires d&apos;ouverture</h3>
                  <div className="hours-grid">
                    {HOURS.map((h) => (
                      <div key={h.day} className="hour-row">
                        <span className="day">{h.day}</span>
                        <span
                          className="time"
                          style={{
                            color:
                              h.time === "Fermé" ? "var(--gray-500)" : "var(--ink)",
                          }}
                        >
                          {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
