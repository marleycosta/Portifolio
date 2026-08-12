# Portfólio - Marley Costa

Site pessoal de **Marley Costa**, desenvolvedor com foco em front-end, estudandte de design gráfico e UX/UI.

Stack: React, TypeScript, Vite, Tailwind CSS e React Router.

## Páginas

- **Início**: apresentação, resumo, projetos em destaque e stack
- **Projetos**: listagem com filtros (Dev / UX) e galeria
- **Sobre**: trajetória, experiência, educação e cursos
- **Contato**: e-mail, telefone/WhatsApp e redes

## Como rodar

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

## Onde editar o conteúdo


| Conteúdo                             | Arquivo                    |
| ------------------------------------ | -------------------------- |
| Projetos (textos, imagens, links)    | `src/app/data/projects.ts` |
| Sobre, experiência, educação, cursos | `src/app/config/about.ts`  |
| Nome, e-mail, telefone, redes, CV    | `src/app/config/site.ts`   |
| Stack exibida na home                | `src/app/config/stack.ts`  |
| Links do menu / footer               | `src/app/config/nav.ts`    |
| Currículo (PDF)                      | `public/cv.pdf`            |
| Favicon                              | `public/favicon.svg`       |
| Imagem de compartilhamento (OG)      | `public/og.jpg`            |
| Capturas dos projetos                | `public/projects/`         |
| Cores e fontes                       | `tailwind.config.ts`       |


## Scripts


| Comando           | Função            |
| ----------------- | ----------------- |
| `npm run dev`     | Servidor local    |
| `npm run build`   | Build de produção |
| `npm run preview` | Preview do build  |
| `npm run lint`    | Lint com oxlint   |


