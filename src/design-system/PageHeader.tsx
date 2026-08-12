interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="mb-12 max-w-2xl md:mb-16">
      <h1 className="font-display text-4xl leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-6xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-mute md:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}
