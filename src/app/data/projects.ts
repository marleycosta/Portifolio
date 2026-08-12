import type { Project, ProjectTipo } from "@/app/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Nexo",
    description:
      "App de finanças pessoais full stack para organizar receitas, despesas e o resumo do mês.",
    tipo: "projeto_dev",
    images: [
      "/projects/nexo/dashboard.png",
      "/projects/nexo/transacoes.png",
      "/projects/nexo/categorias.png",
    ],
    features: [
      "Cadastro, login e área logada",
      "Painel com saldo e gráfico do mês",
      "Lançamentos e categorias (criar, editar e excluir)",
      "Exportação para Excel",
      "Stack: React, TypeScript, Tailwind, Django REST e JWT",
    ],
    repo_url: "https://github.com/marleycosta/Nexo",
    destaque: true,
    order: 0,
  },
];

function sortedProjects() {
  return [...projects].sort((a, b) => a.order - b.order);
}

export function listProjects(
  filter: ProjectTipo | "todos" = "todos",
): Project[] {
  const list = sortedProjects();
  return filter === "todos" ? list : list.filter((p) => p.tipo === filter);
}

export function listFeatured(): Project[] {
  const all = listProjects("todos");
  const featured = all.filter((p) => p.destaque);
  return featured.length > 0 ? featured : all.slice(0, 2);
}
