import { Button, PageShell } from "@/design-system";
export function NotFoundPage() {
  return (
    <PageShell className="py-24 text-center md:py-32">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl tracking-tight text-ink md:text-5xl">
        Página não encontrada
      </h1>
      <p className="mx-auto mt-4 max-w-md text-mute">
        O link pode ter mudado — volte ao início ou veja os projetos.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button to="/" variant="solid">
          Voltar ao início
        </Button>
        <Button to="/projetos" variant="outline">
          Ver projetos
        </Button>
      </div>
    </PageShell>
  );
}
