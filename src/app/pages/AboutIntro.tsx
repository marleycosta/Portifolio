import { homeAboutTeaser } from "@/app/config/about";
import { Button, SurfacePanel, PageShell } from "@/design-system";

export function AboutIntro() {
  return (
    <div className="px-1.5 py-4 md:px-2 md:py-5">
      <PageShell flush>
        <SurfacePanel
          id="sobre"
          className="relative w-full scroll-mt-28 px-5 py-8 md:px-8 md:py-10"
        >
          <h2 className="mb-6 font-display text-4xl tracking-tight text-ink md:mb-8 md:text-5xl">
            Sobre
          </h2>

          <div className="space-y-4 pb-10 text-justify text-lg leading-relaxed text-ink md:space-y-5 md:pb-12 md:text-xl md:leading-relaxed">
            {homeAboutTeaser.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <Button
            to="/sobre"
            className="absolute bottom-5 right-5 md:bottom-6 md:right-6"
          >
            mais
            <span aria-hidden>→</span>
          </Button>
        </SurfacePanel>
      </PageShell>
    </div>
  );
}
