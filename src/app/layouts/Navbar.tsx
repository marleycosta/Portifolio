import { useEffect, useId, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { PageShell } from "@/design-system";

import { mainNavLinks } from "@/app/config/nav";
import { site } from "@/app/config/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;

    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 isolate">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-full bg-paper/55 backdrop-blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-8 translate-y-full bg-gradient-to-b from-paper/40 to-transparent"
      />

      <div className="relative px-1.5 pt-3 pb-3 md:px-2 md:pt-4 md:pb-3">
        <PageShell flush>
          <div
            ref={rootRef}
            className="relative flex items-center justify-between gap-3 rounded-2xl border border-line/70 bg-elevated/75 px-3 py-3.5 shadow-panel backdrop-blur-md md:px-5 md:py-5"
          >
            <NavLink
              to="/"
              className="outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span className="font-display text-sm tracking-tight text-ink md:text-[0.95rem]">
                {site.name}
              </span>
            </NavLink>

            <nav
              aria-label="Principal"
              className="hidden items-center gap-5 md:flex md:gap-6"
            >
              {mainNavLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    [
                      "text-sm tracking-wide transition-colors",
                      isActive ? "text-ink" : "text-mute hover:text-ink",
                    ].join(" ")
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="md:hidden">
              <button
                type="button"
                aria-expanded={open}
                aria-controls={menuId}
                aria-label={open ? "Fechar menu" : "Abrir menu"}
                onClick={() => setOpen((value) => !value)}
                className="inline-flex size-10 items-center justify-center rounded-full border border-line/80 bg-elevated/80 text-ink transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {open ? <CloseIcon /> : <MenuIcon />}
              </button>

              {open ? (
                <div
                  id={menuId}
                  role="menu"
                  className="absolute top-[calc(100%+0.5rem)] right-0 left-0 z-50 overflow-hidden rounded-2xl border border-line/80 bg-elevated shadow-panel"
                >
                  <ul className="flex flex-col py-1.5">
                    {mainNavLinks.map((link) => (
                      <li key={link.to}>
                        <NavLink
                          role="menuitem"
                          to={link.to}
                          onClick={() => setOpen(false)}
                          className={({ isActive }) =>
                            [
                              "block px-4 py-3 text-sm tracking-wide transition-colors",
                              isActive
                                ? "bg-paper/80 text-ink"
                                : "text-mute hover:bg-paper/60 hover:text-ink",
                            ].join(" ")
                          }
                        >
                          {link.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </PageShell>
      </div>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
