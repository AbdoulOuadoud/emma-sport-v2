"use client";

import { useState } from "react";
import type { Product, Category, Brand } from "@/types";
import ProductCard from "@/components/catalogue/ProductCard";
import CatalogueFilters from "@/components/catalogue/CatalogueFilters";
import CatalogueToolbar from "@/components/catalogue/CatalogueToolbar";
import Pagination from "@/components/catalogue/Pagination";

interface CatalogueClientProps {
  products: Product[];
  categories: Category[];
  brands: Brand[];
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
  pagination,
}: CatalogueClientProps) {
  const [filtersOpen, setFiltersOpen] = useState(false);

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
                {products.map((product) => (
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
