import type {
  Product,
  Category,
  Brand,
  StrapiListResponse,
  ProductFilters,
} from "@/types";
import {
  MOCK_PRODUCTS,
  MOCK_CATEGORIES,
  MOCK_BRANDS,
  getMockProductsResponse,
} from "@/lib/mock-data";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ?? "";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN ?? "";

const USE_MOCK = !STRAPI_URL;

async function fetchAPI<T>(path: string, revalidate = 3600): Promise<T> {
  const url = `${STRAPI_URL}/api${path}`;
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {}),
    },
    next: { revalidate },
  });
  if (!res.ok) throw new Error(`Strapi ${res.status}: ${url}`);
  return res.json() as Promise<T>;
}

export async function getProducts(
  filters: ProductFilters = {}
): Promise<StrapiListResponse<Product>> {
  if (USE_MOCK) return getMockProductsResponse(filters);

  const {
    search,
    categorie,
    marque,
    prixMin,
    prixMax,
    disponible,
    sort = "createdAt:desc",
    page = 1,
    pageSize = 12,
  } = filters;

  const p = new URLSearchParams();
  p.set(
    "populate",
    "images,categorie,categorie.image,marque,marque.logo"
  );
  p.set("sort", sort);
  p.set("pagination[page]", String(page));
  p.set("pagination[pageSize]", String(pageSize));

  if (search) p.set("filters[nom][$containsi]", search);
  if (categorie) p.set("filters[categorie][slug][$eq]", categorie);
  if (marque) p.set("filters[marque][nom][$containsi]", marque);
  if (prixMin !== undefined) p.set("filters[prix][$gte]", String(prixMin));
  if (prixMax !== undefined) p.set("filters[prix][$lte]", String(prixMax));
  if (disponible !== undefined)
    p.set("filters[disponible][$eq]", String(disponible));

  try {
    return await fetchAPI<StrapiListResponse<Product>>(
      `/produits?${p.toString()}`
    );
  } catch {
    return getMockProductsResponse(filters);
  }
}

export async function getFeaturedProducts(): Promise<
  StrapiListResponse<Product>
> {
  if (USE_MOCK) {
    const featured = MOCK_PRODUCTS.filter((p) => p.vedette && p.disponible);
    return {
      data: featured,
      meta: {
        pagination: {
          page: 1,
          pageSize: featured.length,
          pageCount: 1,
          total: featured.length,
        },
      },
    };
  }

  const p = new URLSearchParams();
  p.set("populate", "images,categorie,marque");
  p.set("filters[vedette][$eq]", "true");
  p.set("filters[disponible][$eq]", "true");
  p.set("pagination[pageSize]", "8");
  p.set("sort", "createdAt:desc");

  try {
    return await fetchAPI<StrapiListResponse<Product>>(
      `/produits?${p.toString()}`
    );
  } catch {
    const featured = MOCK_PRODUCTS.filter((p) => p.vedette && p.disponible);
    return {
      data: featured,
      meta: {
        pagination: { page: 1, pageSize: 8, pageCount: 1, total: featured.length },
      },
    };
  }
}

export async function getProductBySlug(
  slug: string
): Promise<Product | null> {
  if (USE_MOCK) {
    return MOCK_PRODUCTS.find((p) => p.slug === slug) ?? null;
  }

  const p = new URLSearchParams();
  p.set(
    "populate",
    "images,categorie,categorie.image,marque,marque.logo"
  );
  p.set("filters[slug][$eq]", slug);

  try {
    const res = await fetchAPI<StrapiListResponse<Product>>(
      `/produits?${p.toString()}`,
      86400
    );
    return res.data[0] ?? null;
  } catch {
    return MOCK_PRODUCTS.find((p) => p.slug === slug) ?? null;
  }
}

export async function getSimilarProducts(
  categorieSlug: string,
  excludeSlug: string
): Promise<StrapiListResponse<Product>> {
  if (USE_MOCK) {
    const similar = MOCK_PRODUCTS.filter(
      (p) =>
        p.categorie.slug === categorieSlug &&
        p.slug !== excludeSlug &&
        p.disponible
    ).slice(0, 4);
    return {
      data: similar,
      meta: {
        pagination: { page: 1, pageSize: 4, pageCount: 1, total: similar.length },
      },
    };
  }

  const p = new URLSearchParams();
  p.set("populate", "images,categorie,marque");
  p.set("filters[categorie][slug][$eq]", categorieSlug);
  p.set("filters[slug][$ne]", excludeSlug);
  p.set("filters[disponible][$eq]", "true");
  p.set("pagination[pageSize]", "4");

  try {
    return await fetchAPI<StrapiListResponse<Product>>(
      `/produits?${p.toString()}`
    );
  } catch {
    const similar = MOCK_PRODUCTS.filter(
      (p) =>
        p.categorie.slug === categorieSlug &&
        p.slug !== excludeSlug &&
        p.disponible
    ).slice(0, 4);
    return {
      data: similar,
      meta: {
        pagination: { page: 1, pageSize: 4, pageCount: 1, total: similar.length },
      },
    };
  }
}

export async function getCategories(): Promise<StrapiListResponse<Category>> {
  if (USE_MOCK) {
    return {
      data: MOCK_CATEGORIES,
      meta: {
        pagination: {
          page: 1,
          pageSize: MOCK_CATEGORIES.length,
          pageCount: 1,
          total: MOCK_CATEGORIES.length,
        },
      },
    };
  }

  try {
    return await fetchAPI<StrapiListResponse<Category>>(
      "/categories?populate=image&sort=nom:asc"
    );
  } catch {
    return {
      data: MOCK_CATEGORIES,
      meta: {
        pagination: {
          page: 1,
          pageSize: MOCK_CATEGORIES.length,
          pageCount: 1,
          total: MOCK_CATEGORIES.length,
        },
      },
    };
  }
}

export async function getBrands(): Promise<StrapiListResponse<Brand>> {
  if (USE_MOCK) {
    return {
      data: MOCK_BRANDS,
      meta: {
        pagination: {
          page: 1,
          pageSize: MOCK_BRANDS.length,
          pageCount: 1,
          total: MOCK_BRANDS.length,
        },
      },
    };
  }

  try {
    return await fetchAPI<StrapiListResponse<Brand>>(
      "/marques?populate=logo&sort=nom:asc"
    );
  } catch {
    return {
      data: MOCK_BRANDS,
      meta: {
        pagination: {
          page: 1,
          pageSize: MOCK_BRANDS.length,
          pageCount: 1,
          total: MOCK_BRANDS.length,
        },
      },
    };
  }
}

export async function getAllProductSlugs(): Promise<string[]> {
  if (USE_MOCK) return MOCK_PRODUCTS.map((p) => p.slug);

  try {
    const p = new URLSearchParams();
    p.set("fields[0]", "slug");
    p.set("pagination[pageSize]", "200");
    const res = await fetchAPI<StrapiListResponse<{ slug: string }>>(
      `/produits?${p.toString()}`,
      86400
    );
    return res.data.map((p) => p.slug);
  } catch {
    return MOCK_PRODUCTS.map((p) => p.slug);
  }
}
