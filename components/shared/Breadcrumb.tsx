import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="breadcrumb" aria-label="Fil d'Ariane">
      <div className="wrap">
        <Link href="/">Accueil</Link>
        {items.map((item, i) => (
          <span key={i} style={{ display: "contents" }}>
            <span className="sep" aria-hidden="true">›</span>
            {item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span className="current" aria-current="page">{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}
