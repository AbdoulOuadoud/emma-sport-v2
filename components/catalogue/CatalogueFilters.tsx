"use client";

import { useState, useCallback } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import type { Category, Brand } from "@/types";

interface CatalogueFiltersProps {
  categories: Category[];
  brands: Brand[];
  isOpen: boolean;
  onClose: () => void;
}

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    style={{ transform: open ? "rotate(180deg)" : undefined, transition: "transform .25s" }}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function CatalogueFilters({
  categories,
  brands,
  isOpen,
  onClose,
}: CatalogueFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [openGroups, setOpenGroups] = useState({
    categories: true,
    brands: true,
    prix: true,
    dispo: true,
  });

  const [prixMin, setPrixMin] = useState(
    searchParams.get("prixMin") ?? ""
  );
  const [prixMax, setPrixMax] = useState(
    searchParams.get("prixMax") ?? ""
  );

  const current = {
    categorie: searchParams.get("categorie") ?? "",
    marque: searchParams.get("marque") ?? "",
    disponible: searchParams.get("disponible") ?? "",
    prixMin: searchParams.get("prixMin") ?? "",
    prixMax: searchParams.get("prixMax") ?? "",
  };

  const applyFilter = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      params.delete("page");
      router.push(`${pathname}?${params.toString()}`);
      onClose();
    },
    [pathname, router, searchParams, onClose]
  );

  const applyPrix = () => {
    const params = new URLSearchParams(searchParams.toString());
    if (prixMin) params.set("prixMin", prixMin);
    else params.delete("prixMin");
    if (prixMax) params.set("prixMax", prixMax);
    else params.delete("prixMax");
    params.delete("page");
    router.push(`${pathname}?${params.toString()}`);
    onClose();
  };

  const resetAll = () => {
    setPrixMin("");
    setPrixMax("");
    router.push(pathname);
    onClose();
  };

  const toggleGroup = (key: keyof typeof openGroups) =>
    setOpenGroups((s) => ({ ...s, [key]: !s[key] }));

  const hasFilters =
    current.categorie ||
    current.marque ||
    current.disponible ||
    current.prixMin ||
    current.prixMax;

  return (
    <aside className={`filter-sidebar${isOpen ? " open" : ""}`}>
      <div className="filter-head">
        <h3>Filtres</h3>
        {hasFilters && (
          <button className="filter-reset" onClick={resetAll}>
            Réinitialiser
          </button>
        )}
      </div>

      {/* Categories */}
      <div className="filter-group">
        <button
          className={`filter-group-title${openGroups.categories ? " open" : ""}`}
          onClick={() => toggleGroup("categories")}
        >
          Catégorie <ChevronIcon open={openGroups.categories} />
        </button>
        {openGroups.categories && (
          <div className="filter-options">
            <label className="filter-opt">
              <input
                type="radio"
                name="categorie"
                value=""
                checked={!current.categorie}
                onChange={() => applyFilter("categorie", "")}
              />
              Toutes
            </label>
            {categories.map((cat) => (
              <label key={cat.id} className="filter-opt">
                <input
                  type="radio"
                  name="categorie"
                  value={cat.slug}
                  checked={current.categorie === cat.slug}
                  onChange={() => applyFilter("categorie", cat.slug)}
                />
                {cat.nom}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Brands */}
      <div className="filter-group">
        <button
          className={`filter-group-title${openGroups.brands ? " open" : ""}`}
          onClick={() => toggleGroup("brands")}
        >
          Marque <ChevronIcon open={openGroups.brands} />
        </button>
        {openGroups.brands && (
          <div className="filter-options">
            <label className="filter-opt">
              <input
                type="radio"
                name="marque"
                value=""
                checked={!current.marque}
                onChange={() => applyFilter("marque", "")}
              />
              Toutes
            </label>
            {brands.map((brand) => (
              <label key={brand.id} className="filter-opt">
                <input
                  type="radio"
                  name="marque"
                  value={brand.nom}
                  checked={current.marque === brand.nom}
                  onChange={() => applyFilter("marque", brand.nom)}
                />
                {brand.nom}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price */}
      <div className="filter-group">
        <button
          className={`filter-group-title${openGroups.prix ? " open" : ""}`}
          onClick={() => toggleGroup("prix")}
        >
          Prix <ChevronIcon open={openGroups.prix} />
        </button>
        {openGroups.prix && (
          <div className="price-inputs">
            <input
              type="number"
              placeholder="Min FCFA"
              min={0}
              value={prixMin}
              onChange={(e) => setPrixMin(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && applyPrix()}
            />
            <div className="sep">—</div>
            <input
              type="number"
              placeholder="Max FCFA"
              min={0}
              value={prixMax}
              onChange={(e) => setPrixMax(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && applyPrix()}
            />
            <button
              className="btn btn-dark"
              style={{ gridColumn: "1/-1", padding: "10px", fontSize: ".82rem" }}
              onClick={applyPrix}
            >
              Appliquer
            </button>
          </div>
        )}
      </div>

      {/* Availability */}
      <div className="filter-group" style={{ borderBottom: "none" }}>
        <button
          className={`filter-group-title${openGroups.dispo ? " open" : ""}`}
          onClick={() => toggleGroup("dispo")}
        >
          Disponibilité <ChevronIcon open={openGroups.dispo} />
        </button>
        {openGroups.dispo && (
          <div className="filter-options">
            <label className="filter-opt">
              <input
                type="radio"
                name="disponible"
                value=""
                checked={!current.disponible}
                onChange={() => applyFilter("disponible", "")}
              />
              Tous
            </label>
            <label className="filter-opt">
              <input
                type="radio"
                name="disponible"
                value="true"
                checked={current.disponible === "true"}
                onChange={() => applyFilter("disponible", "true")}
              />
              En stock
            </label>
          </div>
        )}
      </div>
    </aside>
  );
}
