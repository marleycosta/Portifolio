import { CvMenu, PageShell, SurfacePanel } from "@/design-system";
import {
  aboutParagraphs,
  courses,
  education,
  experience,
} from "@/app/config/about";

export function AboutPage() {
  return (
    <div className="px-1.5 py-12 md:px-2 md:py-20">
      <PageShell flush className="space-y-10 md:space-y-12">
        <SurfacePanel className="w-full px-5 py-8 md:px-8 md:py-10">
          <h1 className="mb-6 font-display text-4xl tracking-tight text-ink md:mb-8 md:text-5xl">
            Sobre
          </h1>

          <div className="space-y-5 text-justify text-lg leading-relaxed text-ink md:text-xl md:leading-relaxed">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </SurfacePanel>

        <section>
          <h2 className="mb-4 font-display text-2xl tracking-tight text-ink md:mb-5 md:text-3xl">
            Experiência profissional
          </h2>
          <SurfacePanel as="div" className="px-5 py-6 md:px-7 md:py-7">
            <p className="font-display text-xl text-ink md:text-2xl">
              {experience.role} – {experience.company}
            </p>
            <p className="mt-1 text-sm text-mute">{experience.period}</p>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-base leading-relaxed text-ink md:text-lg">
              {experience.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SurfacePanel>
        </section>

        <section>
          <h2 className="mb-4 font-display text-2xl tracking-tight text-ink md:mb-5 md:text-3xl">
            Educação
          </h2>
          <div className="space-y-3">
            {education.map((item) => (
              <EntryCard
                key={item.title}
                title={item.title}
                place={item.place}
                period={item.period}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 font-display text-2xl tracking-tight text-ink md:mb-5 md:text-3xl">
            Cursos e Workshops
          </h2>
          <div className="space-y-3">
            {courses.map((item) => (
              <EntryCard
                key={`${item.title}-${item.place}`}
                title={item.title}
                place={item.place}
                period={item.period}
              />
            ))}
          </div>
        </section>

        <div className="flex justify-end">
          <CvMenu />
        </div>
      </PageShell>
    </div>
  );
}

function EntryCard({
  title,
  place,
  period,
}: {
  title: string;
  place: string;
  period: string;
}) {
  return (
    <SurfacePanel as="div" className="px-5 py-5 md:px-7 md:py-6">
      <p className="font-display text-lg text-ink md:text-xl">{title}</p>
      <p className="mt-1 text-sm text-mute">
        {place} · {period}
      </p>
    </SurfacePanel>
  );
}
