"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

interface PaginationProps {
  page: number;
  pageCount: number;
  total: number;
}

export default function Pagination({ page, pageCount, total }: PaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (pageCount <= 1) return null;

  const goTo = (p: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(p));
    router.push(`${pathname}?${params.toString()}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pages = buildPageRange(page, pageCount);

  return (
    <nav className="pagination" aria-label="Pagination">
      <button
        className="page-btn"
        onClick={() => goTo(page - 1)}
        disabled={page <= 1}
        aria-label="Page précédente"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {pages.map((p, i) =>
        p === "…" ? (
          <span key={`ellipsis-${i}`} className="page-btn" style={{ border: "none", cursor: "default" }}>
            …
          </span>
        ) : (
          <button
            key={p}
            className={`page-btn${p === page ? " active" : ""}`}
            onClick={() => goTo(p as number)}
            aria-label={`Page ${p}`}
            aria-current={p === page ? "page" : undefined}
          >
            {p}
          </button>
        )
      )}

      <button
        className="page-btn"
        onClick={() => goTo(page + 1)}
        disabled={page >= pageCount}
        aria-label="Page suivante"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <span
        style={{ fontSize: ".8rem", color: "var(--muted)", marginLeft: "8px" }}
      >
        {total} résultat{total > 1 ? "s" : ""}
      </span>
    </nav>
  );
}

function buildPageRange(
  current: number,
  total: number
): (number | "…")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const pages: (number | "…")[] = [1];

  if (current > 3) pages.push("…");

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  for (let i = start; i <= end; i++) pages.push(i);

  if (current < total - 2) pages.push("…");
  pages.push(total);

  return pages;
}
