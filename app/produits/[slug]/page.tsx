import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PromoBar from "@/components/home/PromoBar";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ProductGallery from "@/components/product/ProductGallery";
import ProductActions from "@/components/product/ProductActions";
import ProductCard from "@/components/catalogue/ProductCard";
import {
  getProductBySlug,
  getSimilarProducts,
  getAllProductSlugs,
} from "@/services/products";
import { formatPrice, getDiscountPercent } from "@/lib/utils";

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return { title: "Produit introuvable" };
  }

  const imageUrl = product.images[0]?.url ?? null;

  return {
    title: product.nom,
    description: product.description.slice(0, 155),
    openGraph: {
      title: `${product.nom} | Emma Sport`,
      description: product.description.slice(0, 155),
      images: imageUrl ? [{ url: imageUrl }] : [],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  const similarRes = await getSimilarProducts(product.categorie.slug, slug);

  const discount =
    product.prixPromo
      ? getDiscountPercent(product.prix, product.prixPromo)
      : null;

  return (
    <>
      <PromoBar />
      <Header />
      <main>
        <Breadcrumb
          items={[
            { label: "Catalogue", href: "/catalogue" },
            {
              label: product.categorie.nom,
              href: `/catalogue?categorie=${product.categorie.slug}`,
            },
            { label: product.nom },
          ]}
        />

        <div className="product-page">
          <div className="wrap">
            <div className="product-layout">
              {/* Gallery */}
              <ProductGallery
                images={product.images}
                productName={product.nom}
              />

              {/* Info */}
              <div>
                <div className="product-meta">
                  <span className="cat-badge">{product.categorie.nom}</span>
                  <span className="brand">{product.marque.nom}</span>
                </div>

                <h1 className="product-title">{product.nom}</h1>

                <div className="product-price-block">
                  {product.prixPromo ? (
                    <>
                      <span className="product-price sale">
                        {formatPrice(product.prixPromo)}
                      </span>
                      <span className="product-old-price">
                        {formatPrice(product.prix)}
                      </span>
                      {discount && (
                        <span className="product-discount">-{discount}%</span>
                      )}
                    </>
                  ) : (
                    <span className="product-price">
                      {formatPrice(product.prix)}
                    </span>
                  )}
                </div>

                <p className="product-desc">{product.description}</p>

                <div className="product-attrs">
                  <div className="product-attr">
                    <span className="lbl">Disponibilité</span>
                    {product.disponible ? (
                      <span className="stock-badge in">
                        <span className="dot" />
                        En stock · {product.stock} unité{product.stock > 1 ? "s" : ""}
                      </span>
                    ) : (
                      <span className="stock-badge out">Rupture de stock</span>
                    )}
                  </div>
                  <div className="product-attr">
                    <span className="lbl">Référence</span>
                    <span style={{ fontFamily: "ui-monospace, monospace", fontSize: ".88rem" }}>
                      {product.sku}
                    </span>
                  </div>
                </div>

                <ProductActions
                  productName={product.nom}
                  disponible={product.disponible}
                />

                {/* Reassurances */}
                <div
                  style={{
                    marginTop: "28px",
                    paddingTop: "24px",
                    borderTop: "1px solid var(--gray-200)",
                    display: "grid",
                    gap: "10px",
                  }}
                >
                  {[
                    "Retrait en boutique sous 2h",
                    "Conseils personnalisés sur WhatsApp",
                    "Satisfait ou échangé",
                  ].map((r) => (
                    <div
                      key={r}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: ".9rem",
                        color: "var(--muted)",
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--orange)"
                        strokeWidth="2.5"
                        style={{ width: "18px", height: "18px", flex: "none" }}
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {r}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar products */}
        {similarRes.data.length > 0 && (
          <section className="similar-section">
            <div className="wrap">
              <div className="section-head">
                <div>
                  <span className="eyebrow">Vous aimerez aussi</span>
                  <h2 className="section-title">
                    Produits similaires
                  </h2>
                </div>
              </div>
              <div className="grid-products" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
                {similarRes.data.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
