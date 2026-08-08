"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import type { Product, Category, Brand, ArticleType } from "@/types";
import ProductCard from "@/components/catalogue/ProductCard";
import CatalogueFilters from "@/components/catalogue/CatalogueFilters";
import CatalogueToolbar from "@/components/catalogue/CatalogueToolbar";
import Pagination from "@/components/catalogue/Pagination";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface CatalogueClientProps {
  products: Product[];
  categories: Category[];
  brands: Brand[];
  articleTypes: ArticleType[];
  pagination: { page: number; pageCount: number; total: number };
}

const EmptyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" />
  </svg>
);

export default function CatalogueClient({
  products,
  categories,
  brands,
  articleTypes,
  pagination,
}: CatalogueClientProps) {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [displayProducts, setDisplayProducts] = useState(products);
  const searchParams = useSearchParams();
  const currentSort = searchParams.get("sort") ?? "random";

  useEffect(() => {
    setDisplayProducts(currentSort === "random" ? shuffle(products) : products);
  }, [products, currentSort]);

  return (
    <>
      <CatalogueToolbar
        total={pagination.total}
        onToggleFilters={() => setFiltersOpen((v) => !v)}
        filtersOpen={filtersOpen}
      />

      <div className="catalogue-layout">
        <CatalogueFilters
          categories={categories}
          brands={brands}
          articleTypes={articleTypes}
          isOpen={filtersOpen}
          onClose={() => setFiltersOpen(false)}
        />

        <div>
          {products.length === 0 ? (
            <div className="empty-state">
              <EmptyIcon />
              <h3>Aucun produit trouvé</h3>
              <p>
                Essayez d&apos;ajuster vos filtres ou votre recherche pour trouver
                ce que vous cherchez.
              </p>
              <a href="/catalogue" className="btn btn-dark">
                Réinitialiser les filtres
              </a>
            </div>
          ) : (
            <>
              <div className="grid-products">
                {displayProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
              <Pagination
                page={pagination.page}
                pageCount={pagination.pageCount}
                total={pagination.total}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}
