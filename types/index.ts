export interface StrapiImageFormat {
  url: string;
  width: number;
  height: number;
}

export interface StrapiImage {
  id: number;
  url: string;
  alternativeText: string | null;
  width: number;
  height: number;
  formats?: {
    thumbnail?: StrapiImageFormat;
    small?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    large?: StrapiImageFormat;
  };
}

export interface Category {
  id: number;
  documentId: string;
  nom: string;
  slug: string;
  image: StrapiImage | null;
}

export interface Brand {
  id: number;
  documentId: string;
  nom: string;
  logo: StrapiImage | null;
}

export interface Product {
  id: number;
  documentId: string;
  nom: string;
  slug: string;
  description: string;
  prix: number;
  prixPromo: number | null;
  stock: number;
  sku: string;
  images: StrapiImage[];
  categorie: Category;
  marque: Brand;
  vedette: boolean;
  disponible: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface StrapiListResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiSingleResponse<T> {
  data: T;
  meta: Record<string, unknown>;
}

export type SortOption =
  | "prix:asc"
  | "prix:desc"
  | "nom:asc"
  | "createdAt:desc";

export interface ProductFilters {
  search?: string;
  categorie?: string;
  marque?: string;
  prixMin?: number;
  prixMax?: number;
  disponible?: boolean;
  sort?: SortOption;
  page?: number;
  pageSize?: number;
}
