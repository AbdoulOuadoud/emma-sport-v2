import type { Metadata } from "next";
import { Suspense } from "react";
import PromoBar from "@/components/home/PromoBar";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";
import CatalogueClient from "@/components/catalogue/CatalogueClient";
import { getProducts, getCategories, getBrands, getArticleTypes } from "@/services/products";
import type { ProductFilters, SortOption } from "@/types";
import { getSearchParam, getSearchParamNumber } from "@/lib/utils";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Catalogue",
  description:
    "Découvrez tous les articles de sport Emma Sport — chaussures, vêtements, accessoires. Running, football, fitness, basketball et plus.",
};

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function CataloguePage({ searchParams }: PageProps) {
  const sp = await searchParams;

  const filters: ProductFilters = {
    search: getSearchParam(sp.search),
    categorie: getSearchParam(sp.categorie),
    marque: getSearchParam(sp.marque),
    typeArticle: getSearchParam(sp.typeArticle),
    prixMin: getSearchParamNumber(sp.prixMin),
    prixMax: getSearchParamNumber(sp.prixMax),
    disponible:
      sp.disponible === "true" ? true : sp.disponible === "false" ? false : undefined,
    sort: (getSearchParam(sp.sort) as SortOption | undefined) ?? "createdAt:desc",
    page: getSearchParamNumber(sp.page) ?? 1,
    pageSize: 12,
  };

  const [productsRes, categoriesRes, brandsRes, articleTypes] = await Promise.all([
    getProducts(filters),
    getCategories(),
    getBrands(),
    getArticleTypes(),
  ]);

  return (
    <>
      <PromoBar />
      <Header />
      <main>
        {/* Page hero */}
        <div className="page-hero">
          <div className="wrap">
            <div>
              <span className="eyebrow">Emma Sport</span>
              <h1 className="display" style={{ fontSize: "clamp(2rem,5vw,3.6rem)", marginTop: "0.3em" }}>
                Notre catalogue
              </h1>
              <p className="lead" style={{ marginTop: "10px", color: "var(--muted)" }}>
                Running, football, fitness, basketball et plus —{" "}
                <strong style={{ color: "var(--ink)" }}>
                  {productsRes.meta.pagination.total} références
                </strong>{" "}
                sélectionnées par des experts.
              </p>
            </div>
          </div>
        </div>

        <Breadcrumb items={[{ label: "Catalogue" }]} />

        <div className="catalogue-page">
          <div className="wrap">
            <Suspense fallback={
              <div style={{ textAlign: "center", padding: "48px 0", color: "var(--muted)" }}>
                Chargement du catalogue…
              </div>
            }>
              <CatalogueClient
                products={productsRes.data}
                categories={categoriesRes.data}
                brands={brandsRes.data}
                articleTypes={articleTypes}
                pagination={productsRes.meta.pagination}
              />
            </Suspense>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
