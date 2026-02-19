# Angular Blog Starter

Estrutura inicial de blog em Angular (standalone components) com:

- listagem de posts;
- página de detalhe por rota (`/post/:id`);
- serviço com dados mockados.

## Como rodar

```bash
npm install
npm start
```

## Estrutura principal

- `src/app/features/home`: lista de posts
- `src/app/features/post-detail`: detalhe de post
- `src/app/core/services/post.service.ts`: fonte de dados mock