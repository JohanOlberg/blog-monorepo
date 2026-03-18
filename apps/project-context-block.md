PROJECT CONTEXT

Estou construindo um projeto de portfólio com arquitetura profissional usando Turborepo + TypeScript.

Estrutura atual do monorepo:

apps/
  blog  → site público que renderiza posts
  cms   → painel administrativo para criar, editar, publicar e arquivar posts
  api   → backend que será criado agora

packages/
  domain → entidades e tipos do sistema (ex: Post)
  store  → Zustand store usada como cache reativo local no frontend

Arquitetura atual do frontend:

repository → store → hooks → view model → UI

A store NÃO é a source of truth real.
Ela funciona como cache reativo local da API.

Objetivo agora:
Criar um backend profissional dentro de apps/api.

Stack do backend:

Node.js
TypeScript
Fastify
Prisma
PostgreSQL

Objetivo da API:

Ser a source of truth real dos dados e servir tanto o blog quanto o CMS.

A primeira feature será "posts", suportando:

- listar posts
- buscar post por id
- criar post
- editar post
- publicar post
- arquivar post

Arquitetura desejada no backend:

feature-based + separação em camadas

domain
application
infrastructure
presentation