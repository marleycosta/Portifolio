import { AboutIntro } from "./AboutIntro";
import { ProjectsIntro } from "./ProjectsIntro";
import { StackIntro } from "./StackIntro";
import { site } from "@/app/config/site";

export function HomePage() {
  return (
    <div>
      <section className="page-shell pb-4 pt-14 md:pb-5 md:pt-20">
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-mute">
          {site.role}
        </p>
        <h1 className="font-display text-5xl leading-[0.95] tracking-tight text-ink sm:text-6xl md:text-7xl">
          {site.name}
        </h1>
      </section>

      <AboutIntro />
      <ProjectsIntro />
      <StackIntro />
    </div>
  );
}
