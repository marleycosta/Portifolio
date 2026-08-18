import { ProjectCard } from "./ProjectCard";
import { listFeatured } from "@/app/data/projects";
import { Button, PageShell } from "@/design-system";

export function ProjectsIntro() {
  const data = listFeatured();

  return (
    <div className="px-1.5 py-7 md:px-2 md:py-9">
      <PageShell flush>
        <section id="projetos" className="relative scroll-mt-28 pb-12">
          <h2 className="mb-8 font-display text-4xl tracking-tight text-ink md:mb-10 md:text-5xl">
            Projetos
          </h2>

          {data.length > 0 ? (
            <ul
              className="scrollbar-none -mx-1.5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1.5 pb-1 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3"
              aria-label="Projetos em destaque"
            >
              {data.map((project) => (
                <li
                  key={project.id}
                  className="w-[82%] shrink-0 snap-start sm:w-auto sm:min-h-0 sm:min-w-0 sm:shrink"
                >
                  <ProjectCard project={project} variant="compact" />
                </li>
              ))}
            </ul>
          ) : null}

          <Button to="/projetos" className="absolute bottom-0 right-0">
            mais
            <span aria-hidden>→</span>
          </Button>
        </section>
      </PageShell>
    </div>
  );
}
