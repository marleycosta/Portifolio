import type { Project, ProjectTipo } from "@/app/types";

export const projects: Project[] = [
  {
    id: 2,
    slug: "articula",
    title: "Articula",
    description:
      "Gerador de pranchas fonológicas para fonoaudiologia: escolhe o som, sorteia figuras e baixa a prancha.",
    tipo: "projeto_dev",
    images: ["/projects/articula/inicio.png"],
    features: [
      "Pensado para dispositivos móveis",
      "Busca pelo som da pronúncia, não pela ortografia",
      "325 figuras",
      "Exportação da prancha em PNG ou JPG (A5)",
      "Stack: React, TypeScript, Tailwind e Vite",
    ],
    repo_url: "https://github.com/marleycosta/Articula",
    demo_url: "https://articula-prancha.vercel.app/",
    detail: {
      context: [
        "O Articula é um gerador de pranchas fonológicas para fonoaudiologia. Na sessão, a profissional precisa de figuras que contenham um som-alvo (por exemplo /R/ ou /ʃ/) para treinar articulação. Montar isso à mão leva tempo: escolher palavras, achar imagens, organizar no papel.",
        "O app resolve isso em uma frase: escolhe o fonema, gera a prancha e baixa para levar na sessão. Sem cadastro: abre no celular (ou no computador), monta e usa.",
      ],
      howItWorks: [
        "Escolhe um ou mais fonemas (oclusivas, fricativas, nasais, laterais e róticos).",
        "Decide se as figuras podem se repetir.",
        "Informa a quantidade (até 60).",
        "Gera a prancha em formato A5.",
        "Pode embaralhar ou gerar de novo.",
        "Baixa em PNG ou JPG.",
        "No /acervo, vê as 325 figuras e filtra por fonema.",
      ],
      decisions: [
        "A busca é pelo som da pronúncia, não pela ortografia. Ex.: /Z/ pode trazer casa (/kaza/).",
        "Sem login: só abrir e usar.",
        "Feito principalmente para dispositivos móveis; também funciona no computador.",
        "Acervo com 325 figuras, cada uma com nome em português brasileiro, transcrição e fonemas.",
        "Sorteio e exportação acontecem no navegador, sem backend.",
      ],
      stack:
        "React, TypeScript, Tailwind e Vite. A prancha é desenhada em canvas A5 no próprio navegador. As figuras são PNGs locais (Noto Emoji).",
      sections: [
        {
          title: "Seleção de fonemas",
          image: "/projects/articula/selecao.png",
        },
        {
          title: "Prancha gerada",
          image: "/projects/articula/prancha.png",
        },
        {
          title: "Acervo",
          image: "/projects/articula/acervo.png",
        },
      ],
    },
    destaque: true,
    order: 0,
  },
  {
    id: 1,
    slug: "nexo",
    title: "Nexo",
    description:
      "App de finanças pessoais para registrar receitas e despesas, acompanhar o mês e exportar lançamentos.",
    tipo: "projeto_dev",
    images: ["/projects/nexo/inicio.png"],
    features: [
      "Cadastro, login e área logada",
      "Painel com saldo e gráfico do mês",
      "Lançamentos e categorias com filtros",
      "Exportação para Excel",
      "Stack: React, TypeScript, Tailwind, Django REST e JWT",
    ],
    repo_url: "https://github.com/marleycosta/Nexo",
    detail: {
      context: [
        "Para quem quer organizar as finanças pessoais no dia a dia, controlar o que entra e sai, entender para onde vai o dinheiro e ter um resumo claro do mês, sem planilha manual.",
        "Anotar gastos em caderno, WhatsApp ou planilha solta vira bagunça: difícil filtrar por período, ver saldo atualizado e entender quanto cada categoria consumiu. O Nexo centraliza tudo em um só lugar: cadastro, categorias, painel e exportação.",
        "O app resolve em uma frase: registra e organiza suas finanças pessoais com categorias, resumo mensal e exportação para Excel.",
      ],
      howItWorks: [
        "Criar conta ou entrar com login demo (demo / demo123).",
        "Cadastrar categorias com cor (receita ou despesa).",
        "Lançar transações com valor, data, tipo e categoria.",
        "Filtrar lançamentos por período e categoria.",
        "Ver no painel saldo, receitas, despesas e gráfico do mês.",
        "Editar ou excluir lançamentos e categorias.",
        "Exportar transações filtradas para Excel.",
        "Gerenciar perfil, alterar senha ou excluir a conta.",
      ],
      decisions: [
        "Stack completa de portfólio: React + Django + banco (SQLite local ou PostgreSQL no Docker).",
        "Cada usuário vê só os próprios dados, com API protegida por JWT.",
        "Design system próprio (componentes reutilizáveis, visual consistente).",
        "Categorias com cor para leitura rápida no painel e no gráfico.",
        "Exportação Excel direto do navegador, sem ferramenta externa.",
        "Projeto de demonstração: ambiente local, licença CC BY-NC-ND 4.0.",
      ],
      stack:
        "React · TypeScript · Tailwind CSS · Vite · Recharts · ExcelJS · Django · Django REST Framework · SimpleJWT · PostgreSQL / SQLite · Docker",
      sections: [
        {
          title: "Dashboard",
          image: "/projects/nexo/dashboard.png",
        },
        {
          title: "Transações",
          image: "/projects/nexo/transacoes.png",
        },
        {
          title: "Categorias",
          image: "/projects/nexo/categorias.png",
        },
        {
          title: "Login",
          image: "/projects/nexo/login.png",
        },
        {
          title: "Criar conta",
          image: "/projects/nexo/cadastro.png",
        },
        {
          title: "Perfil",
          image: "/projects/nexo/perfil.png",
        },
      ],
    },
    destaque: true,
    order: 1,
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

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
