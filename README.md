# Mari Tá Viajando

Site de conteúdo sobre viagem — Next.js 14 (App Router) + Tailwind CSS, seguindo o guia de marca (cores, tipografia Poppins/Pacifico, ícones e slogan "Viaje mais. Gaste menos.").

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Estrutura

- `src/app/page.tsx` — home (hero + destinos em destaque + newsletter)
- `src/app/{passagens,hoteis,destinos,bate-voltas,promocoes,dicas}/page.tsx` — páginas de categoria (prontas para receber os primeiros posts)
- `src/components/` — Header, Footer, Logo, ícones da marca, grade de categorias
- `tailwind.config.ts` — paleta oficial da marca (`brand.blue`, `brand.cyan`, `brand.yellow`, `brand.fog`, `brand.ink`)

## Publicando no GitHub

```bash
git init
git add .
git commit -m "Site inicial Mari Tá Viajando"
git branch -M main
git remote add origin <URL_DO_SEU_REPOSITORIO>
git push -u origin main
```

## Deploy na Vercel

1. Acesse vercel.com → **Add New Project**
2. Importe o repositório do GitHub
3. Framework é detectado automaticamente como **Next.js** — não precisa mudar nada
4. Clique em **Deploy**

Depois, para apontar o domínio `maritaviajando.com.br`: em **Settings → Domains** no projeto da Vercel, adicione o domínio e siga as instruções de DNS.

## Próximos passos sugeridos

- Trocar as imagens de placeholder (Unsplash) por fotos próprias
- Criar um sistema de posts (MDX ou um headless CMS) para Passagens, Hotéis, Destinos etc.
- Adicionar página de busca (o ícone de lupa no header já está pronto no layout)
