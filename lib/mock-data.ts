import type { Product, Category, Brand, StrapiListResponse } from "@/types";

const CAT_RUNNING: Category = {
  id: 1, documentId: "cat-running", nom: "Running", slug: "running", image: null,
};
const CAT_FOOTBALL: Category = {
  id: 2, documentId: "cat-football", nom: "Football", slug: "football", image: null,
};
const CAT_FITNESS: Category = {
  id: 3, documentId: "cat-fitness", nom: "Fitness", slug: "fitness", image: null,
};
const CAT_MUSCU: Category = {
  id: 4, documentId: "cat-musculation", nom: "Musculation", slug: "musculation", image: null,
};
const CAT_BASKET: Category = {
  id: 5, documentId: "cat-basketball", nom: "Basketball", slug: "basketball", image: null,
};
const CAT_JOGGING: Category = {
  id: 6, documentId: "cat-jogging", nom: "Jogging", slug: "jogging", image: null,
};
const CAT_BASKETS: Category = {
  id: 7, documentId: "cat-baskets", nom: "Baskets", slug: "baskets", image: null,
};
const CAT_EQUIPEMENTS: Category = {
  id: 8, documentId: "cat-equipements", nom: "Équipements", slug: "equipements", image: null,
};

const BRAND_VELOCE: Brand = { id: 1, documentId: "b-veloce", nom: "Veloce", logo: null };
const BRAND_FORZA: Brand = { id: 2, documentId: "b-forza", nom: "Forza", logo: null };
const BRAND_PULSE: Brand = { id: 3, documentId: "b-pulse", nom: "Pulse", logo: null };
const BRAND_KINETIK: Brand = { id: 4, documentId: "b-kinetik", nom: "Kinetik", logo: null };
const BRAND_APEX: Brand = { id: 5, documentId: "b-apex", nom: "Apex", logo: null };
const BRAND_STRIDE: Brand = { id: 6, documentId: "b-stride", nom: "Stride", logo: null };
const BRAND_FLEXA: Brand = { id: 7, documentId: "b-flexa", nom: "Flexa", logo: null };
const BRAND_STRATOS: Brand = { id: 8, documentId: "b-stratos", nom: "Stratos", logo: null };

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1, documentId: "p1",
    nom: "Velocity Pro Runner",
    slug: "velocity-pro-runner",
    description: "La chaussure running haute performance pour les coureurs exigeants. Semelle amortissante React, tige en mesh respirant Flyknit, retour d'énergie optimal. Idéale pour les distances 5 à 42 km.",
    prix: 45000, prixPromo: null, stock: 12, sku: "VPR-001",
    images: [], categorie: CAT_RUNNING, marque: BRAND_VELOCE,
    vedette: true, disponible: true,
    createdAt: "2026-01-01T00:00:00.000Z", updatedAt: "2026-01-01T00:00:00.000Z",
  },
  {
    id: 2, documentId: "p2",
    nom: "Ballon Match Pro",
    slug: "ballon-match-pro",
    description: "Ballon de football homologué FIFA. Conçu pour les matchs officiels, surface thermosoudée 32 panneaux, chambre à air butyle. Résistant à l'humidité.",
    prix: 9000, prixPromo: null, stock: 30, sku: "BMP-002",
    images: [], categorie: CAT_FOOTBALL, marque: BRAND_FORZA,
    vedette: false, disponible: true,
    createdAt: "2026-01-02T00:00:00.000Z", updatedAt: "2026-01-02T00:00:00.000Z",
  },
  {
    id: 3, documentId: "p3",
    nom: "Tapis Grip+",
    slug: "tapis-grip-plus",
    description: "Tapis de yoga et fitness haute densité 6mm. Surface antidérapante double face, matière TPE écologique, facile à nettoyer. Livré avec sangle de transport.",
    prix: 18000, prixPromo: 14000, stock: 18, sku: "TGP-003",
    images: [], categorie: CAT_FITNESS, marque: BRAND_PULSE,
    vedette: false, disponible: true,
    createdAt: "2026-01-03T00:00:00.000Z", updatedAt: "2026-01-03T00:00:00.000Z",
  },
  {
    id: 4, documentId: "p4",
    nom: "Haltères Ajustables 20kg",
    slug: "halteres-ajustables-20kg",
    description: "Set d'haltères réglables de 2 à 20 kg par incrément de 2 kg. Manche ergonomique antidérapant, système de serrage rapide. Idéal pour l'entraînement à domicile.",
    prix: 35000, prixPromo: null, stock: 8, sku: "HAJ-004",
    images: [], categorie: CAT_MUSCU, marque: BRAND_KINETIK,
    vedette: true, disponible: true,
    createdAt: "2026-01-04T00:00:00.000Z", updatedAt: "2026-01-04T00:00:00.000Z",
  },
  {
    id: 5, documentId: "p5",
    nom: "Maillot Court Pro",
    slug: "maillot-court-pro",
    description: "Maillot de basketball technologie Dri-Fit. Tissu léger et respirant, coupe ample pour la liberté de mouvement. Disponible en plusieurs coloris — flocage nom et numéro possible en boutique.",
    prix: 12000, prixPromo: null, stock: 22, sku: "MCP-005",
    images: [], categorie: CAT_BASKET, marque: BRAND_APEX,
    vedette: false, disponible: true,
    createdAt: "2026-01-05T00:00:00.000Z", updatedAt: "2026-01-05T00:00:00.000Z",
  },
  {
    id: 6, documentId: "p6",
    nom: "Veste Aero Wind",
    slug: "veste-aero-wind",
    description: "Veste coupe-vent running ultra-légère. Tissu imperméable respirant, capuche amovible, réfléchissants 360°. Pliable dans sa propre poche.",
    prix: 27000, prixPromo: 23000, stock: 14, sku: "VAW-006",
    images: [], categorie: CAT_RUNNING, marque: BRAND_STRIDE,
    vedette: false, disponible: true,
    createdAt: "2026-01-06T00:00:00.000Z", updatedAt: "2026-01-06T00:00:00.000Z",
  },
  {
    id: 7, documentId: "p7",
    nom: "Crampons Strike X",
    slug: "crampons-strike-x",
    description: "Crampons football terrain synthétique. Semelle TPU ultra-rigide, tige en mesh renforcé, système Stud Lock anti-rotation. Réservation possible.",
    prix: 32000, prixPromo: null, stock: 0, sku: "CSX-007",
    images: [], categorie: CAT_FOOTBALL, marque: BRAND_VELOCE,
    vedette: false, disponible: false,
    createdAt: "2026-01-07T00:00:00.000Z", updatedAt: "2026-01-07T00:00:00.000Z",
  },
  {
    id: 8, documentId: "p8",
    nom: "Sneakers HighTop",
    slug: "sneakers-hightop",
    description: "Chaussures basketball montantes avec amorti Air Max en talon. Tige en cuir synthétique renforcé, semelle intercalaire Zoom pour les démarrages explosifs.",
    prix: 48000, prixPromo: null, stock: 6, sku: "SHT-008",
    images: [], categorie: CAT_BASKET, marque: BRAND_APEX,
    vedette: true, disponible: true,
    createdAt: "2026-01-08T00:00:00.000Z", updatedAt: "2026-01-08T00:00:00.000Z",
  },
  {
    id: 9, documentId: "p9",
    nom: "Survêtement Training Flex",
    slug: "survetement-training-flex",
    description: "Ensemble jogging molletonné, veste zippée à capuche et pantalon resserré aux chevilles. Confortable pour l'échauffement, la récupération ou un look streetwear au quotidien.",
    prix: 15000, prixPromo: null, stock: 25, sku: "STF-009",
    images: [], categorie: CAT_JOGGING, marque: BRAND_FLEXA,
    vedette: false, disponible: true,
    createdAt: "2026-01-09T00:00:00.000Z", updatedAt: "2026-01-09T00:00:00.000Z",
  },
  {
    id: 10, documentId: "p10",
    nom: "Sneakers Street Runner",
    slug: "sneakers-street-runner",
    description: "Baskets urbaines polyvalentes, idéales au quotidien comme à l'entraînement léger. Semelle EVA légère et amortissante, tige en toile respirante, design moderne en plusieurs coloris.",
    prix: 25000, prixPromo: 21000, stock: 16, sku: "SSR-010",
    images: [], categorie: CAT_BASKETS, marque: BRAND_STRATOS,
    vedette: false, disponible: true,
    createdAt: "2026-01-10T00:00:00.000Z", updatedAt: "2026-01-10T00:00:00.000Z",
  },
  {
    id: 11, documentId: "p11",
    nom: "Short Training Elite",
    slug: "short-training-elite",
    description: "Short fitness polyvalent avec poche zippée. Tissu élastique 4 directions, taille élastique réglable, longueur mi-cuisse. Convient running, salle, cours collectifs.",
    prix: 9000, prixPromo: null, stock: 35, sku: "STE-011",
    images: [], categorie: CAT_FITNESS, marque: BRAND_PULSE,
    vedette: false, disponible: true,
    createdAt: "2026-01-11T00:00:00.000Z", updatedAt: "2026-01-11T00:00:00.000Z",
  },
  {
    id: 12, documentId: "p12",
    nom: "Sac de Sport Performance",
    slug: "sac-de-sport-performance",
    description: "Sac de sport spacieux avec compartiment chaussures séparé et poche pour gourde. Tissu déperlant résistant, bandoulière rembourrée et réglable — le compagnon idéal pour vos séances et déplacements.",
    prix: 12000, prixPromo: null, stock: 20, sku: "SSP-012",
    images: [], categorie: CAT_EQUIPEMENTS, marque: BRAND_KINETIK,
    vedette: true, disponible: true,
    createdAt: "2026-01-12T00:00:00.000Z", updatedAt: "2026-01-12T00:00:00.000Z",
  },
];

export const MOCK_CATEGORIES: Category[] = [
  CAT_RUNNING, CAT_FOOTBALL, CAT_FITNESS, CAT_MUSCU,
  CAT_BASKET, CAT_JOGGING, CAT_BASKETS, CAT_EQUIPEMENTS,
];

export const MOCK_BRANDS: Brand[] = [
  BRAND_VELOCE, BRAND_FORZA, BRAND_PULSE, BRAND_KINETIK,
  BRAND_APEX, BRAND_STRIDE, BRAND_FLEXA, BRAND_STRATOS,
];

export function getMockProductsResponse(filters: {
  search?: string;
  categorie?: string;
  marque?: string;
  prixMin?: number;
  prixMax?: number;
  disponible?: boolean;
  sort?: string;
  page?: number;
  pageSize?: number;
}): StrapiListResponse<Product> {
  let results = [...MOCK_PRODUCTS];

  if (filters.search) {
    const q = filters.search.toLowerCase();
    results = results.filter(
      (p) =>
        p.nom.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }
  if (filters.categorie) {
    results = results.filter((p) => p.categorie.slug === filters.categorie);
  }
  if (filters.marque) {
    results = results.filter((p) =>
      p.marque.nom.toLowerCase().includes(filters.marque!.toLowerCase())
    );
  }
  if (filters.prixMin !== undefined) {
    results = results.filter((p) => (p.prixPromo ?? p.prix) >= filters.prixMin!);
  }
  if (filters.prixMax !== undefined) {
    results = results.filter((p) => (p.prixPromo ?? p.prix) <= filters.prixMax!);
  }
  if (filters.disponible !== undefined) {
    results = results.filter((p) => p.disponible === filters.disponible);
  }

  switch (filters.sort) {
    case "prix:asc":
      results.sort((a, b) => (a.prixPromo ?? a.prix) - (b.prixPromo ?? b.prix));
      break;
    case "prix:desc":
      results.sort((a, b) => (b.prixPromo ?? b.prix) - (a.prixPromo ?? a.prix));
      break;
    case "nom:asc":
      results.sort((a, b) => a.nom.localeCompare(b.nom, "fr"));
      break;
    default:
      results.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
  }

  const page = filters.page ?? 1;
  const pageSize = filters.pageSize ?? 12;
  const total = results.length;
  const pageCount = Math.ceil(total / pageSize);
  const start = (page - 1) * pageSize;
  const data = results.slice(start, start + pageSize);

  return { data, meta: { pagination: { page, pageSize, pageCount, total } } };
}
