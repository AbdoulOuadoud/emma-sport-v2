"use client";

import { useState } from "react";

interface FormState {
  nom: string;
  telephone: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    nom: "", telephone: "", email: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="form-success">
        <div className="checkmark">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3>Message envoyé !</h3>
        <p>
          Merci pour votre message. Notre équipe vous répondra dans les plus
          brefs délais, généralement sous 2h pendant les heures d&apos;ouverture.
        </p>
        <button
          className="btn btn-orange"
          style={{ marginTop: "20px" }}
          onClick={() => {
            setSubmitted(false);
            setForm({ nom: "", telephone: "", email: "", message: "" });
          }}
        >
          Nouveau message
        </button>
      </div>
    );
  }

  return (
    <form className="form-grid" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="nom">Nom complet *</label>
          <input
            id="nom"
            name="nom"
            type="text"
            placeholder="Jean Dupont"
            required
            value={form.nom}
            onChange={handleChange}
            autoComplete="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="telephone">Téléphone</label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            placeholder="+33 6 12 34 56 78"
            value={form.telephone}
            onChange={handleChange}
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="email">Adresse e-mail *</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="jean@exemple.fr"
          required
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          placeholder="Je souhaite en savoir plus sur…"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="btn btn-orange"
        style={{ marginTop: "4px" }}
        disabled={loading}
      >
        {loading ? "Envoi en cours…" : "Envoyer le message"}
        {!loading && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "18px", height: "18px" }}>
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        )}
      </button>
    </form>
  );
}
