"use client";

import { buildWhatsAppUrl, buildTelUrl } from "@/lib/utils";

const SHOP_PHONE = "+2290167583727";
const SHOP_PHONE_DISPLAY = "+229 01 67 58 37 27";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2zm4.4 12c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.8 1-.3.1-.5 0a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2.1-.1 0-.3 0-.4l-.7-1.7c-.2-.5-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.6 4c2.5 1 2.5.7 3 .6a2.6 2.6 0 0 0 1.7-1.2 2 2 0 0 0 .2-1.2c-.1-.1-.3-.2-.5-.3z" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </svg>
);

interface ProductActionsProps {
  productName: string;
  disponible: boolean;
}

export default function ProductActions({ productName, disponible }: ProductActionsProps) {
  const waMessage = `Bonjour, je suis intéressé(e) par le produit "${productName}" que j'ai vu sur votre catalogue en ligne. Pourriez-vous me donner plus d'informations ?`;

  return (
    <div className="product-actions">
      <a
        href={buildWhatsAppUrl(SHOP_PHONE, waMessage)}
        className="btn btn-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon />
        {disponible ? "Commander via WhatsApp" : "Me prévenir à la réception"}
      </a>
      <a href={buildTelUrl(SHOP_PHONE)} className="btn btn-dark">
        <PhoneIcon />
        Appeler la boutique · {SHOP_PHONE_DISPLAY}
      </a>
    </div>
  );
}
