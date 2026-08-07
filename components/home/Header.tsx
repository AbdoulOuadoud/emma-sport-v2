"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useCart } from "@/contexts/CartContext";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/catalogue", label: "Catalogue" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

const SUGGESTIONS = [
  "Chaussures running",
  "Ballon football",
  "Haltères",
  "Maillot basket",
  "Maillot + flocage",
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, searchOpen]);

  const openSearch = () => {
    setSearchOpen(true);
    setTimeout(() => searchInputRef.current?.focus(), 300);
  };

  const handleSearchSubmit = (value: string) => {
    if (!value.trim()) return;
    setSearchOpen(false);
    setSearchValue("");
    router.push(`/catalogue?search=${encodeURIComponent(value.trim())}`);
  };

  const { count, openCart } = useCart();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className={`header${scrolled ? " scrolled" : ""}`}>
        <div className="wrap">
          <Link href="/" className="logo" aria-label="Emma Sport, accueil">
            <Image src="/logo.png" alt="Emma Sport" width={1536} height={1024} priority />
          </Link>

          <nav className="nav">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={isActive(href) ? "active" : ""}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <button
              className="icon-btn"
              onClick={openSearch}
              aria-label="Rechercher"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            <button
              className="icon-btn cart-btn"
              onClick={openCart}
              aria-label="Voir le panier"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              {count > 0 && (
                <span className="cart-count">{count > 9 ? "9+" : count}</span>
              )}
            </button>

            <Link href="/contact" className="btn btn-dark contact-btn">
              Nous contacter
            </Link>

            <button
              className="icon-btn burger"
              onClick={() => setMenuOpen(true)}
              aria-label="Menu"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`m-menu${menuOpen ? " open" : ""}`}>
        <div className="backdrop" onClick={() => setMenuOpen(false)} />
        <div className="panel">
          <div className="m-top">
            <Link href="/" className="logo" onClick={() => setMenuOpen(false)}>
              <Image src="/logo.png" alt="Emma Sport" width={1536} height={1024} />
            </Link>
            <button
              className="icon-btn"
              onClick={() => setMenuOpen(false)}
              aria-label="Fermer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>
          </div>

          <nav className="m-nav">
            {NAV_LINKS.map(({ href, label }, i) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
              >
                {label} <span>0{i + 1}</span>
              </Link>
            ))}
          </nav>

          <div className="m-actions">
            <a
              href="https://wa.me/2290167583727"
              className="btn btn-orange"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a href="tel:+2290167583727" className="btn btn-ghost">
              Appeler la boutique
            </a>
          </div>
        </div>
      </div>

      {/* SEARCH OVERLAY */}
      <div className={`search${searchOpen ? " open" : ""}`}>
        <div className="backdrop" onClick={() => setSearchOpen(false)} />
        <div className="sheet">
          <form
            className="field"
            onSubmit={(e) => {
              e.preventDefault();
              handleSearchSubmit(searchValue);
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Que cherchez-vous ?"
              autoComplete="off"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button
              type="button"
              className="close"
              onClick={() => setSearchOpen(false)}
            >
              Fermer (Esc)
            </button>
          </form>
          <div className="suggest">
            <span className="lbl">Populaire</span>
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                className="chip"
                type="button"
                onClick={() => handleSearchSubmit(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
