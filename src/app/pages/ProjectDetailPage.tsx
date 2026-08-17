import { Navigate, useParams } from "react-router-dom";

import { getProjectBySlug } from "@/app/data/projects";
import { Button, PageShell, SurfacePanel } from "@/design-system";
import { TipoBadge } from "./TipoBadge";

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project?.detail) {
    return <Navigate to="/projetos" replace />;
  }

  const { detail } = project;
  const cover = project.images[0];

  return (
    <div className="px-1.5 py-6 md:px-2 md:py-10">
      <PageShell flush className="space-y-8 md:space-y-10">
        <Button to="/projetos" variant="soft">
          ← Projetos
        </Button>

        <SurfacePanel className="w-full px-5 py-6 md:px-8 md:py-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-0 flex-1 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="font-display text-4xl tracking-tight text-ink md:text-5xl">
                  {project.title}
                </h1>
                <TipoBadge tipo={project.tipo} />
              </div>
              <p className="text-base text-mute md:text-lg md:whitespace-nowrap">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.demo_url ? (
                <Button
                  href={project.demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver site
                  <span aria-hidden>→</span>
                </Button>
              ) : null}
              {project.repo_url ? (
                <Button
                  href={project.repo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                >
                  GitHub
                  <span aria-hidden>→</span>
                </Button>
              ) : null}
            </div>
          </div>

          {cover ? (
            <img
              src={cover}
              alt={`${project.title} — visão geral`}
              className="mt-6 block w-full h-auto"
            />
          ) : null}
        </SurfacePanel>

        <DetailSection title="Contexto">
          <div className="space-y-4 text-base leading-relaxed text-ink md:text-lg">
            {detail.context.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </DetailSection>

        <DetailSection title="Como funciona">
          <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-ink md:text-lg">
            {detail.howItWorks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </DetailSection>

        <DetailSection title="Decisões">
          <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-ink md:text-lg">
            {detail.decisions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </DetailSection>

        <section className="space-y-8 md:space-y-10">
          {detail.sections.map((section) => (
            <SurfacePanel
              key={section.title}
              as="div"
              className="overflow-hidden px-5 py-6 md:px-7 md:py-7"
            >
              <h2 className="mb-5 font-display text-2xl tracking-tight text-ink md:text-3xl">
                {section.title}
              </h2>
              <img
                src={section.image}
                alt={`${project.title} — ${section.title}`}
                loading="lazy"
                className="w-full"
              />
            </SurfacePanel>
          ))}
        </section>

        <DetailSection title="Stack">
          <p className="text-base leading-relaxed text-ink md:text-lg">
            {detail.stack}
          </p>
        </DetailSection>
      </PageShell>
    </div>
  );
}

function DetailSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-4 font-display text-2xl tracking-tight text-ink md:mb-5 md:text-3xl">
        {title}
      </h2>
      <SurfacePanel as="div" className="px-5 py-6 md:px-7 md:py-7">
        {children}
      </SurfacePanel>
    </section>
  );
}
