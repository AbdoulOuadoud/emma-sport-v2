export interface ProductImage {
  id: number;
  url: string;
  alt: string | null;
}

export interface Category {
  id: number;
  nom: string;
  slug: string;
  image: ProductImage | null;
}

export interface Brand {
  id: number;
  nom: string;
  logo: ProductImage | null;
}

export interface ArticleType {
  slug: string;
  nom: string;
}

export interface Product {
  id: number;
  nom: string;
  slug: string;
  description: string;
  prix: number;
  prixPromo: number | null;
  stock: number;
  sku: string;
  images: ProductImage[];
  categorie: Category;
  marque: Brand;
  typeArticle: ArticleType | null;
  vedette: boolean;
  disponible: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface ListResponse<T> {
  data: T[];
  meta: {
    pagination: Pagination;
  };
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
  typeArticle?: string;
  prixMin?: number;
  prixMax?: number;
  disponible?: boolean;
  sort?: SortOption;
  page?: number;
  pageSize?: number;
}
