export function formatPrice(price: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "XOF",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function getDiscountPercent(original: number, promo: number): number {
  return Math.round(((original - promo) / original) * 100);
}

export function buildWhatsAppUrl(phone: string, message: string): string {
  const clean = phone.replace(/\D/g, "");
  return `https://wa.me/${clean}?text=${encodeURIComponent(message)}`;
}

export function buildTelUrl(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}

export function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max).trimEnd()}…`;
}

export function getStrapiImageUrl(
  path: string,
  strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337"
): string {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${strapiUrl}${path}`;
}

export function getSearchParam(
  value: string | string[] | undefined
): string | undefined {
  if (!value) return undefined;
  return Array.isArray(value) ? value[0] : value;
}

export function getSearchParamNumber(
  value: string | string[] | undefined
): number | undefined {
  const str = getSearchParam(value);
  if (!str) return undefined;
  const n = parseFloat(str);
  return isNaN(n) ? undefined : n;
}
