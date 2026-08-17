export type ProjectTipo = "case_ux" | "projeto_dev";

export interface ProjectSection {
  title: string;
  image: string;
}

export interface ProjectDetail {
  context: string[];
  howItWorks: string[];
  decisions: string[];
  stack: string;
  sections: ProjectSection[];
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  tipo: ProjectTipo;
  images: string[];
  features: string[];
  repo_url: string;
  demo_url?: string;
  detail?: ProjectDetail;
  destaque: boolean;
  order: number;
}
