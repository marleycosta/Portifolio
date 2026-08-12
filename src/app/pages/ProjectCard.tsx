import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { Button } from "@/design-system";
import { TipoBadge } from "./TipoBadge";

import type { Project } from "@/app/types";

function projectAnchorId(id: number) {
  return `projeto-${id}`;
}

interface ProjectCardProps {
  project: Project;
  variant?: "featured" | "compact";
}

export function ProjectCard({
  project,
  variant = "featured",
}: ProjectCardProps) {
  const images = project.images;
  const cover = images[0] ?? null;
  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const total = images.length;
  const current = images[active] ?? cover;
  const anchorId = projectAnchorId(project.id);

  const goPrev = useCallback(() => {
    setActive((i) => (i === 0 ? total - 1 : i - 1));
  }, [total]);

  const goNext = useCallback(() => {
    setActive((i) => (i === total - 1 ? 0 : i + 1));
  }, [total]);

  useEffect(() => {
    if (variant !== "featured") return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && zoomed) {
        setZoomed(false);
        return;
      }
      if (total < 2) return;
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [variant, total, goPrev, goNext, zoomed]);

  useEffect(() => {
    if (!zoomed) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [zoomed]);

  if (variant === "compact") {
    return (
      <Link
        to={`/projetos#${anchorId}`}
        className="group block h-full rounded-2xl outline-offset-4 transition-opacity hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
        aria-label={`Ver projeto ${project.title}`}
      >
        <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line/70 transition-colors group-hover:border-accent/50">
          <div className="flex aspect-[16/10] w-full shrink-0 items-center justify-center overflow-hidden bg-[#ecefee]">
            {cover ? (
              <img
                src={cover}
                alt=""
                loading="lazy"
                className="max-h-full max-w-full object-contain"
              />
            ) : null}
          </div>

          <div className="flex flex-1 flex-col gap-2 p-4 md:p-5">
            <div className="flex items-start justify-between gap-2">
              <h2 className="font-display text-xl leading-snug tracking-tight text-ink md:text-2xl">
                {project.title}
              </h2>
              <TipoBadge tipo={project.tipo} className="shrink-0" />
            </div>
            <p className="text-sm leading-relaxed text-mute">
              {project.description}
            </p>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <article
      id={anchorId}
      className="surface-panel scroll-mt-28 grid overflow-hidden md:grid-cols-[minmax(0,0.7fr)_minmax(0,0.3fr)]"
    >
      <div className="relative flex min-h-[220px] flex-col bg-[#ecefee] md:min-h-[320px]">
        <div
          className="relative flex flex-1 items-center gap-3 overflow-hidden px-3 py-6 sm:gap-4 sm:px-4 md:gap-6 md:px-5 md:py-8"
          role="region"
          aria-roledescription="carousel"
          aria-label={`Capturas do ${project.title}`}
        >
          {total > 1 ? (
            <button
              type="button"
              onClick={goPrev}
              aria-label="Imagem anterior"
              className="z-10 flex size-6 shrink-0 items-center justify-center rounded-full border border-line/80 bg-elevated/90 text-ink shadow-panel transition-colors hover:border-accent hover:text-accent md:size-7"
            >
              <Chevron direction="left" />
            </button>
          ) : (
            <div className="size-6 shrink-0 md:size-7" aria-hidden />
          )}

          <div className="relative flex min-h-[200px] flex-1 items-center justify-center md:min-h-[280px]">
            {images.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => {
                  setActive(index);
                  setZoomed(true);
                }}
                aria-label={`Ampliar captura ${index + 1}`}
                className={[
                  "cursor-zoom-in transition-opacity duration-300",
                  index === active
                    ? "relative opacity-100"
                    : "pointer-events-none absolute inset-0 m-auto opacity-0",
                ].join(" ")}
              >
                <img
                  src={src}
                  alt={`${project.title} — captura ${index + 1} de ${total}`}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="max-h-[min(52vh,420px)] w-full object-contain"
                />
              </button>
            ))}
          </div>

          {total > 1 ? (
            <button
              type="button"
              onClick={goNext}
              aria-label="Próxima imagem"
              className="z-10 flex size-6 shrink-0 items-center justify-center rounded-full border border-line/80 bg-elevated/90 text-ink shadow-panel transition-colors hover:border-accent hover:text-accent md:size-7"
            >
              <Chevron direction="right" />
            </button>
          ) : (
            <div className="size-6 shrink-0 md:size-7" aria-hidden />
          )}
        </div>

        {total > 1 ? (
          <div className="flex items-center justify-center gap-2 pb-4">
            {images.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Ir para captura ${index + 1}`}
                aria-current={index === active}
                className={[
                  "size-2 rounded-full transition-colors",
                  index === active
                    ? "bg-ink"
                    : "bg-ink/25 hover:bg-ink/50",
                ].join(" ")}
              />
            ))}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col justify-start gap-4 p-5 md:p-6 lg:p-8">
        <div className="flex items-start justify-between gap-3">
          <h2 className="font-display text-2xl leading-snug tracking-tight text-ink md:text-3xl">
            {project.title}
          </h2>
          <TipoBadge tipo={project.tipo} className="shrink-0" />
        </div>

        <p className="text-sm leading-relaxed text-mute md:text-base">
          {project.description}
        </p>

        {project.features.length > 0 ? (
          <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink md:text-base">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        ) : null}

        {project.repo_url ? (
          <div className="mt-auto flex justify-end">
            <Button
              href={project.repo_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver no GitHub
              <span aria-hidden>→</span>
            </Button>
          </div>
        ) : null}
      </div>

      {zoomed && current
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-label={`${project.title} — captura ampliada`}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/75 p-4 backdrop-blur-sm md:p-8"
              onClick={() => setZoomed(false)}
            >
              <button
                type="button"
                onClick={() => setZoomed(false)}
                aria-label="Fechar"
                className="absolute top-4 right-4 z-10 flex size-10 items-center justify-center rounded-full border border-line/40 bg-elevated text-ink shadow-panel transition-colors hover:border-accent hover:text-accent"
              >
                <CloseIcon />
              </button>

              {total > 1 ? (
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    goPrev();
                  }}
                  aria-label="Imagem anterior"
                  className="absolute top-1/2 left-3 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-line/40 bg-elevated text-ink shadow-panel transition-colors hover:border-accent hover:text-accent md:left-6"
                >
                  <Chevron direction="left" />
                </button>
              ) : null}

              <img
                src={current}
                alt={`${project.title} — captura ${active + 1} ampliada`}
                className="max-h-[90vh] max-w-[min(96vw,1200px)] rounded-xl object-contain shadow-panel"
                onClick={(event) => event.stopPropagation()}
              />

              {total > 1 ? (
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    goNext();
                  }}
                  aria-label="Próxima imagem"
                  className="absolute top-1/2 right-3 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-line/40 bg-elevated text-ink shadow-panel transition-colors hover:border-accent hover:text-accent md:right-6"
                >
                  <Chevron direction="right" />
                </button>
              ) : null}
            </div>,
            document.body,
          )
        : null}
    </article>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d={direction === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
