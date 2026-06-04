"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const NAV_IDS = [
  { id: "collection", label: "Collection" },
  { id: "instrument", label: "Instrument" },
  { id: "export", label: "Export" },
  { id: "quality", label: "Quality" },
  { id: "register", label: "Register" },
  { id: "apps", label: "Applications" },
] as const;

export default function Masthead() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("IntersectionObserver" in window)) return;

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActiveId(e.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    NAV_IDS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) spy.observe(el);
    });

        const sentinel = sentinelRef.current;
    let elev: IntersectionObserver | null = null;
    if (sentinel) {
      elev = new IntersectionObserver(
        (entries) => {
          setScrolled(!entries[0].isIntersecting);
        },
        { threshold: 0 },
      );
      elev.observe(sentinel);
    }

    return () => {
      spy.disconnect();
      elev?.disconnect();
    };
  }, []);

    useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((v) => !v), []);

  return (
    <>
            <div
        ref={sentinelRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: 12,
          width: 1,
          pointerEvents: "none",
        }}
      />

      <header
        className={`masthead ${scrolled ? "scrolled" : ""} ${open ? "nav-open" : ""}`.trim()}
      >
        <div className="masthead-row">
          <a className="brand" href="#top" aria-label="SpatialOS, home">
            <Image
              src="/logo_text.png"
              alt="SpatialOS"
              width={180}
              height={48}
              priority
              className="brand-logo"
            />
          </a>

          <nav className="nav-links" id="primary-nav" aria-label="Primary">
            {NAV_IDS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={activeId === id ? "is-active" : undefined}
                aria-current={activeId === id ? "page" : undefined}
                onClick={close}
              >
                {label}
              </a>
            ))}
          </nav>

          <button
            className="nav-toggle"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={toggle}
          >
            <span aria-hidden="true" />
          </button>
        </div>
      </header>
    </>
  );
}
