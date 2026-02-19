import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  private readonly posts: Post[] = [
    {
      id: 1,
      title: 'Começando um blog com Angular',
      excerpt: 'Estruture componentes, rotas e serviços para crescer sem retrabalho.',
      content:
        'Este é um post inicial com conteúdo mock. O objetivo é validar a estrutura do blog antes de integrar uma API real.',
      author: 'Equipe Blog',
      publishedAt: '2026-02-15T10:00:00.000Z',
      tags: ['angular', 'arquitetura', 'frontend']
    },
    {
      id: 2,
      title: 'Rotas e páginas de detalhe',
      excerpt: 'Use parâmetros de rota para abrir cada post individualmente.',
      content:
        'Com o parâmetro id na URL, você consegue buscar o post no serviço e renderizar uma página completa de leitura.',
      author: 'Equipe Blog',
      publishedAt: '2026-02-16T14:30:00.000Z',
      tags: ['router', 'spa', 'angular']
    },
    {
      id: 3,
      title: 'Próximos passos do projeto',
      excerpt: 'Planeje autenticação, CMS e persistência quando a base estiver sólida.',
      content:
        'Depois de validar o fluxo lista-detalhe, você pode adicionar backend, paginação e editor de postagens.',
      author: 'Equipe Blog',
      publishedAt: '2026-02-17T09:15:00.000Z',
      tags: ['roadmap', 'produto']
    }
  ];

  getPosts(): Post[] {
    return this.posts;
  }

  getPostById(id: number): Post | undefined {
    return this.posts.find((post) => post.id === id);
  }
}