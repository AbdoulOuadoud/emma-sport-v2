import type { Product, Category, Brand, ArticleType, ListResponse, ProductFilters } from "@/types";
import { MOCK_PRODUCTS, MOCK_CATEGORIES, MOCK_BRANDS, ARTICLE_TYPES } from "@/lib/mock-data";

export async function getProducts(
  filters: ProductFilters = {}
): Promise<ListResponse<Product>> {
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
  if (filters.typeArticle) {
    results = results.filter((p) => p.typeArticle?.slug === filters.typeArticle);
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

export async function getFeaturedProducts(): Promise<ListResponse<Product>> {
  const featured = MOCK_PRODUCTS.filter((p) => p.vedette && p.disponible);
  return {
    data: featured,
    meta: {
      pagination: { page: 1, pageSize: featured.length, pageCount: 1, total: featured.length },
    },
  };
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  return MOCK_PRODUCTS.find((p) => p.slug === slug) ?? null;
}

export async function getSimilarProducts(
  categorieSlug: string,
  excludeSlug: string
): Promise<ListResponse<Product>> {
  const similar = MOCK_PRODUCTS.filter(
    (p) =>
      p.categorie.slug === categorieSlug &&
      p.slug !== excludeSlug &&
      p.disponible
  ).slice(0, 4);
  return {
    data: similar,
    meta: { pagination: { page: 1, pageSize: 4, pageCount: 1, total: similar.length } },
  };
}

export async function getCategories(): Promise<ListResponse<Category>> {
  return {
    data: MOCK_CATEGORIES,
    meta: {
      pagination: {
        page: 1, pageSize: MOCK_CATEGORIES.length, pageCount: 1, total: MOCK_CATEGORIES.length,
      },
    },
  };
}

export async function getBrands(): Promise<ListResponse<Brand>> {
  return {
    data: MOCK_BRANDS,
    meta: {
      pagination: {
        page: 1, pageSize: MOCK_BRANDS.length, pageCount: 1, total: MOCK_BRANDS.length,
      },
    },
  };
}

export async function getAllProductSlugs(): Promise<string[]> {
  return MOCK_PRODUCTS.map((p) => p.slug);
}

export async function getArticleTypes(): Promise<ArticleType[]> {
  return ARTICLE_TYPES;
}
