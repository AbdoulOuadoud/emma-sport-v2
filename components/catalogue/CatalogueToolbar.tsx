"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import type { SortOption } from "@/types";

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "createdAt:desc", label: "Nouveautés" },
  { value: "prix:asc", label: "Prix croissant" },
  { value: "prix:desc", label: "Prix décroissant" },
  { value: "nom:asc", label: "A → Z" },
];

const FilterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "16px", height: "16px" }}>
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="8" y1="12" x2="16" y2="12" />
    <line x1="12" y1="18" x2="12" y2="18" strokeWidth="3" />
  </svg>
);

interface CatalogueToolbarProps {
  total: number;
  onToggleFilters: () => void;
  filtersOpen: boolean;
}

export default function CatalogueToolbar({
  total,
  onToggleFilters,
  filtersOpen,
}: CatalogueToolbarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentSearch = searchParams.get("search") ?? "";
  const currentSort = (searchParams.get("sort") as SortOption | null) ?? "createdAt:desc";

  const [search, setSearch] = useState(currentSearch);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setSearch(currentSearch);
  }, [currentSearch]);

  const applySearch = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value.trim()) params.set("search", value.trim());
    else params.delete("search");
    params.delete("page");
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => applySearch(value), 450);
  };

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set("sort", value);
    else params.delete("sort");
    params.delete("page");
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="catalogue-toolbar">
      {/* Row 1: Search bar (full width) */}
      <div className="search-bar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder="Rechercher un produit…"
          value={search}
          onChange={(e) => handleSearchChange(e.target.value)}
          aria-label="Rechercher"
        />
      </div>

      {/* Row 2: results | sort | filter btn */}
      <span className="results">
        <strong>{total}</strong>
        {" "}produit{total > 1 ? "s" : ""}
      </span>

      <select
        className="sort-select"
        value={currentSort}
        onChange={(e) => handleSortChange(e.target.value)}
        aria-label="Trier par"
      >
        {SORT_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <button
        className="btn btn-ghost filter-toggle-btn"
        onClick={onToggleFilters}
        aria-expanded={filtersOpen}
        aria-label="Filtres"
      >
        <FilterIcon />
        Filtres
      </button>
    </div>
  );
}
