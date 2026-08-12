import { stack } from "@/app/config/stack";
import { PageShell, SurfacePanel } from "@/design-system";

export function StackIntro() {
  return (
    <div className="px-1.5 py-7 md:px-2 md:py-9">
      <PageShell flush>
        <SurfacePanel
          id="stack"
          className="w-full scroll-mt-28 px-5 py-8 md:px-8 md:py-10"
        >
          <h2 className="mb-6 font-display text-4xl tracking-tight text-ink md:mb-8 md:text-5xl">
            Stack Tecnológico
          </h2>

          <ul className="flex flex-wrap gap-3 md:gap-4">
            {stack.map((name) => (
              <li key={name}>
                <span className="inline-flex rounded-xl border border-line/50 bg-elevated/80 px-4 py-2.5 text-sm font-medium tracking-wide text-ink md:px-5 md:py-3 md:text-base">
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </SurfacePanel>
      </PageShell>
    </div>
  );
}
