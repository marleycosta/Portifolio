import { useEffect, useId, useRef, useState } from "react";

import { Button } from "./Button";
import { site } from "@/app/config/site";

export function CvMenu({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

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
    <div ref={rootRef} className={`relative inline-flex ${className}`.trim()}>
      <Button
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        Currículo
      </Button>

      {open ? (
        <div
          id={menuId}
          role="menu"
          className="absolute right-0 bottom-full z-20 mb-2 min-w-[11rem] overflow-hidden rounded-xl border border-line/80 bg-elevated shadow-panel"
        >
          <a
            role="menuitem"
            href={site.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2.5 text-sm text-ink transition-colors hover:bg-paper"
            onClick={() => setOpen(false)}
          >
            Visualizar currículo
          </a>
          <a
            role="menuitem"
            href={site.cvUrl}
            download={`CV-${site.shortName}.pdf`}
            className="block border-t border-line/60 px-4 py-2.5 text-sm text-ink transition-colors hover:bg-paper"
            onClick={() => setOpen(false)}
          >
            Baixar currículo
          </a>
        </div>
      ) : null}
    </div>
  );
}
