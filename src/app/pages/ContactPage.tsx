import { site } from "@/app/config/site";
import { Button, PageHeader, PageShell, SurfacePanel } from "@/design-system";

export function ContactPage() {
  return (
    <PageShell className="py-12 md:py-16">
      <PageHeader title="Vamos conversar" description="Escolha um canal." />

      <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
        <SurfacePanel as="div" className="flex flex-col px-5 py-6 md:px-6 md:py-7">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-ink">
            E-mail
          </p>
          <div className="mt-3 flex flex-1 flex-col items-center text-center">
            <a
              href={`mailto:${site.email}`}
              className="block break-all font-display text-lg text-ink transition-colors hover:text-accent md:text-xl"
            >
              {site.email}
            </a>
            <Button href={`mailto:${site.email}`} className="mt-5">
              Enviar e-mail
            </Button>
          </div>
        </SurfacePanel>

        <SurfacePanel as="div" className="flex flex-col px-5 py-6 md:px-6 md:py-7">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-ink">
            Telefone
          </p>
          <div className="mt-3 flex flex-1 flex-col items-center text-center">
            <a
              href={site.phoneHref}
              className="block font-display text-lg text-ink transition-colors hover:text-accent md:text-xl"
            >
              {site.phone}
            </a>
            <Button
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5"
            >
              WhatsApp
            </Button>
          </div>
        </SurfacePanel>

        <SurfacePanel as="div" className="flex flex-col px-5 py-6 md:px-6 md:py-7">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-ink">
            Redes sociais
          </p>
          <div className="mt-3 flex flex-1 flex-wrap items-center justify-center gap-3">
            {site.githubUrl ? (
              <Button
                href={site.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
            ) : null}
            {site.linkedinUrl ? (
              <Button
                href={site.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Button>
            ) : null}
          </div>
        </SurfacePanel>
      </div>
    </PageShell>
  );
}
