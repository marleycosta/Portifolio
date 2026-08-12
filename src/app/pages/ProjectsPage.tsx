import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { ProjectCard } from "./ProjectCard";
import { ProjectFilter } from "./ProjectFilter";
import { listProjects } from "@/app/data/projects";
import type { ProjectTipo } from "@/app/types";

export function ProjectsPage() {
  const { hash } = useLocation();
  const [filter, setFilter] = useState<ProjectTipo | "todos">("todos");
  const data = listProjects(filter);

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace(/^#/, "");
    const el = document.getElementById(id);
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [hash, data]);

  return (
    <div className="page-shell py-12 md:py-20">
      <h1 className="mb-8 font-display text-4xl tracking-tight text-ink md:mb-10 md:text-5xl">
        Projetos
      </h1>

      <div className="mb-10">
        <ProjectFilter value={filter} onChange={setFilter} />
      </div>

      {data.length === 0 ? (
        <div className="flex min-h-[40vh] items-center justify-center">
          <p className="text-sm text-mute">Nada neste filtro</p>
        </div>
      ) : (
        <div className="grid gap-5">
          {data.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
