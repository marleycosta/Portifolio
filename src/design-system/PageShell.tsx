import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
  className?: string;
  flush?: boolean;
};

export function PageShell({
  children,
  className = "",
  flush = false,
}: PageShellProps) {
  return (
    <div
      className={[
        "page-shell",
        flush ? "!px-0" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
