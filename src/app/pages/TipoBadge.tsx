import type { ProjectTipo } from "@/app/types";

interface TipoBadgeProps {
  tipo: ProjectTipo;
  className?: string;
}

export function TipoBadge({ tipo, className = "" }: TipoBadgeProps) {
  const isUx = tipo === "case_ux";
  return (
    <span
      className={[
        "inline-flex items-center font-mono text-[11px] font-medium tracking-normal",
        isUx ? "text-seam-ux" : "text-accent",
        className,
      ].join(" ")}
    >
      {isUx ? "[ux]" : "[dev]"}
    </span>
  );
}
