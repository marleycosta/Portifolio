import { Link } from "react-router-dom";
import { PageShell } from "@/design-system";

import { navLinks } from "@/app/config/nav";
import { site } from "@/app/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-line/70 bg-[#d8dcd9]">
      <PageShell className="flex flex-col gap-4 py-4 md:gap-3 md:py-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-6">
          <div className="md:max-w-xs">
            <p className="font-display text-sm tracking-tight text-ink">
              {site.name}
            </p>
            <p className="mt-1 text-xs leading-snug text-mute">
              {site.footerSummary}
            </p>
          </div>

          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-ink">
              Links
            </p>
            <ul className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-xs text-mute transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-ink">
              Contato
            </p>
            <div className="mt-1.5 flex items-center gap-1.5">
              <a
                href={`mailto:${site.email}`}
                aria-label="E-mail"
                title={site.email}
                className="inline-flex size-7 items-center justify-center rounded-full border border-line/80 text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <EmailIcon />
              </a>
              {site.linkedinUrl ? (
                <a
                  href={site.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex size-7 items-center justify-center rounded-full border border-line/80 text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  <LinkedInIcon />
                </a>
              ) : null}
              {site.githubUrl ? (
                <a
                  href={site.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="inline-flex size-7 items-center justify-center rounded-full border border-line/80 text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  <GitHubIcon />
                </a>
              ) : null}
            </div>
          </div>
        </div>

        <p className="border-t border-line/60 pt-2.5 text-[11px] text-ink-subtle">
          © {year} {site.name}
        </p>
      </PageShell>
    </footer>
  );
}

function EmailIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M5.5 7.5 12 12.2 18.5 7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 12 .3z" />
    </svg>
  );
}
