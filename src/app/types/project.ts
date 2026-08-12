export type ProjectTipo = "case_ux" | "projeto_dev";

export interface Project {
  id: number;
  title: string;
  description: string;
  tipo: ProjectTipo;
  images: string[];
  features: string[];
  repo_url: string;
  destaque: boolean;
  order: number;
}
