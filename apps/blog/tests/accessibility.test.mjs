import test, { after } from 'node:test';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createServer } from 'vite';

// Render the real TSX components through Vite, without starting an HTTP server.
process.env.VITE_API_URL = 'http://localhost:1';
const server = await createServer({
  root: fileURLToPath(new URL('../', import.meta.url)),
  server: { middlewareMode: true },
  appType: 'custom',
  optimizeDeps: { noDiscovery: true },
});
after(() => server.close());
const { PostCard } = await server.ssrLoadModule('/src/features/post/list/components/PostCard.tsx');
const { LogoBox } = await server.ssrLoadModule('/src/features/post/list/components/LogoBox.tsx');
const { FooterView } = await server.ssrLoadModule('/src/shared/components/FooterView.tsx');
const { default: MainLayout } = await server.ssrLoadModule('/src/app/layouts/MainLayout.tsx');
const { About } = await server.ssrLoadModule('/src/features/about/components/About.tsx');
const { PostDetail } = await server.ssrLoadModule('/src/features/post/details/components/PageDetailPost.tsx');
const { BoxListContainer } = await server.ssrLoadModule('/src/features/post/list/components/BoxListContainer.tsx');
const { NotFoundPage } = await server.ssrLoadModule('/src/pages/NotFoundPage/NotFoundPage.tsx');
const h = React.createElement;
const post = {
  id: '1', slug: 'accessible-article', title: 'Accessible article', description: 'An article summary.',
  content: '<h2>Section</h2><p>Article text.</p>', publishedAt: '2026-11-20T00:00:00Z',
  category: { title: 'Frontend', slug: 'frontend', color: '#8dba32' },
  author: { name: 'Johan', bio: 'Author biography.' },
};

function render(element, pathname = '/') {
  const client = new QueryClient();
  client.setQueryData(['categories'], []);
  client.setQueryData(['posts', 'latest'], post);
  client.setQueryData(['posts', post.slug], post);
  client.setQueryData(['posts', null, null, null], []);
  try {
    return renderToStaticMarkup(h(QueryClientProvider, { client },
      h(MemoryRouter, { initialEntries: [pathname] }, element)));
  } finally { client.clear(); }
}

test('article links are named by the visible title, not the whole card', () => {
  const markup = render(h(PostCard, { ...post, author: post.author.name }));
  const titleId = markup.match(/aria-labelledby="([^"]+)"/)[1];
  assert.ok(markup.includes(`id="${titleId}"`));
  assert.ok(markup.includes('>Accessible article</h2>'));
  assert.equal((markup.match(/href="\/posts\/accessible-article"/g) || []).length, 1);
});

test('footer has one article link and a home logo link', () => {
  const markup = render(h(FooterView, { post }));
  assert.equal((markup.match(/href="\/posts\/accessible-article"/g) || []).length, 1);
  assert.ok(markup.includes('href="/#top"'));
  assert.ok(markup.includes('aria-label="ArchType — Home"'));
});

test('bento logo is a native fragment link so the current URL filters are retained', () => {
  const markup = render(h(LogoBox, { size: 'box' }), '/?search=react&category=frontend');
  assert.ok(markup.includes('href="#top"'));
  assert.ok(markup.includes('aria-label="ArchType — Back to top"'));
});

test('home, About, article, and not-found routes have one main and one h1', () => {
  for (const [pathname, component, path] of [
    ['/', BoxListContainer, '/'],
    ['/about', About, '/about'],
    ['/posts/accessible-article', PostDetail, '/posts/:slug'],
    ['/missing', NotFoundPage, '*'],
  ]) {
    const markup = render(h(Routes, null,
      h(Route, { element: h(MainLayout) }, h(Route, { path, element: h(component) }))), pathname);
    assert.equal((markup.match(/<main\b/g) || []).length, 1, pathname);
    assert.equal((markup.match(/<h1\b/g) || []).length, 1, pathname);
    assert.ok(markup.includes('id="top"'), pathname);
    assert.ok(markup.includes('href="#main-content"'), pathname);
  }
});
