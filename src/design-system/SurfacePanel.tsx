import type { ReactNode } from "react";

type SurfacePanelProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "article" | "section" | "div";
};

export function SurfacePanel({
  children,
  className = "",
  id,
  as: Tag = "article",
}: SurfacePanelProps) {
  return (
    <Tag id={id} className={`surface-panel ${className}`.trim()}>
      {children}
    </Tag>
  );
}
