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
  const cover = project.images[0] ?? null;
  const anchorId = projectAnchorId(project.id);
  const detailPath = project.detail
    ? `/projetos/${project.slug}`
    : `/projetos#${anchorId}`;

  if (variant === "compact") {
    return (
      <Link
        to={detailPath}
        className="group block h-full rounded-2xl outline-offset-4 transition-opacity hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
        aria-label={`Ver projeto ${project.title}`}
      >
        <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line/70 transition-colors group-hover:border-accent/50">
          <div className="aspect-[16/9] w-full shrink-0 overflow-hidden bg-[#ecefee]">
            {cover ? (
              <img
                src={cover}
                alt=""
                loading="lazy"
                className="size-full object-contain object-top"
              />
            ) : null}
          </div>

          <div className="flex flex-1 flex-col gap-2 border-t border-line/70 bg-[color-mix(in_srgb,#1a3d2e_28%,transparent)] p-4 md:p-5">
            <div className="flex items-start justify-between gap-2">
              <h2 className="font-display text-xl leading-snug tracking-tight text-ink md:text-2xl">
                {project.title}
              </h2>
              <TipoBadge tipo={project.tipo} className="shrink-0" />
            </div>
            <p className="text-sm leading-relaxed text-ink/85">
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
      className="surface-panel scroll-mt-28 grid overflow-hidden md:grid-cols-[minmax(0,0.68fr)_minmax(0,0.32fr)] md:items-stretch"
    >
      <div className="bg-[#ecefee]">
        {cover ? (
          <img
            src={cover}
            alt={`${project.title} — capa`}
            loading="eager"
            className="block w-full"
          />
        ) : null}
      </div>

      <div className="flex flex-col justify-between gap-3 p-4 md:h-full md:p-5">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h2 className="font-display text-xl leading-snug tracking-tight text-ink md:text-2xl">
              {project.title}
            </h2>
            <TipoBadge tipo={project.tipo} className="shrink-0" />
          </div>

          <p className="text-sm leading-snug text-mute">
            {project.description}
          </p>

          {project.features.length > 0 ? (
            <ul className="list-disc space-y-1 pl-4 text-xs leading-snug text-ink md:text-sm">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          ) : null}
        </div>

        {project.detail ? (
          <div className="flex justify-end pt-1">
            <Button to={`/projetos/${project.slug}`}>
              mais
              <span aria-hidden>→</span>
            </Button>
          </div>
        ) : null}
      </div>
    </article>
  );
}
