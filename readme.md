ArchType
Ideas for a brighter internet.

ArchType started with a simple idea: I wanted a place to write about technology, share what I'm learning, and experiment with how a blog could look and feel.

Instead of starting from a ready-made template, I decided to build the experience myself — from the public website to the content management system and API. It's both a personal publishing project and a space to explore ideas about design, development, and digital products.
More than a traditional blog
The part I enjoy most is the dynamic, bento-inspired layout. The homepage composes posts into different grid patterns and mixes them with navigation and brand elements. The goal is to make browsing feel less repetitive while keeping the content easy to explore.
- Changing layouts: the page chooses from different compositions based on the available posts, avoiding recently used patterns when possible.
- A playful visual identity: the ArchType logo appears in different sizes and visual themes throughout the grid.
- Navigation within the layout: navigation and category discovery become part of the page composition, rather than just a static header.
- Responsive reading: the public site includes post pages, search and category filtering, and layouts for sparse or empty results.
What's inside
This repository is a TypeScript monorepo containing three applications:
App	Purpose	Main technologies
apps/blog	Public-facing blog and dynamic homepage	React, Vite, TanStack Query
apps/cms	Content management for posts and related data	React, TipTap, TanStack Query
apps/api	Content, users, authors, categories, and publishing workflows	Node.js, Fastify, Prisma, PostgreSQL


The workspace is coordinated with Turborepo. The API is organized around domain features and separates business rules, use cases, persistence, and HTTP presentation.
Where it's going
ArchType Mobile — in development. I'm building a React Native / Expo experience connected to the same API, exploring how the content and identity of ArchType translate to a phone.

Multi-tenant publishing — a longer-term idea. Today, ArchType is my own blog. Eventually, I'd like to explore turning it into a platform where different writers or teams could run their own spaces, with separate content, identities, and settings. This is a direction I'm considering, not a feature of the current application.
Project status
ArchType is an ongoing personal project. Some parts are still being refined, particularly content, quality assurance, and deployment. I use it to learn by building — and to try ideas that don't always fit into a conventional blog template.
