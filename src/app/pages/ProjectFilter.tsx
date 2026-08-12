import type { ProjectTipo } from "@/app/types";
import { Button } from "@/design-system";

const options: { value: ProjectTipo | "todos"; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "case_ux", label: "UX/UI" },
  { value: "projeto_dev", label: "Dev" },
];

interface ProjectFilterProps {
  value: ProjectTipo | "todos";
  onChange: (value: ProjectTipo | "todos") => void;
}

export function ProjectFilter({ value, onChange }: ProjectFilterProps) {
  return (
    <div
      role="tablist"
      aria-label="Filtrar por tipo"
      className="flex flex-wrap gap-2"
    >
      {options.map((opt) => (
        <Button
          key={opt.value}
          role="tab"
          aria-selected={value === opt.value}
          active={value === opt.value}
          variant="soft"
          onClick={() => onChange(opt.value)}
        >
          {opt.label}
        </Button>
      ))}
    </div>
  );
}
