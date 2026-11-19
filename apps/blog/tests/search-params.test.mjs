import test from 'node:test';
import assert from 'node:assert/strict';
import { withSearch } from '../src/features/navigation/model/search-params.ts';

test('a new search preserves category and ordering, with a shareable URL', () => {
  const current = new URLSearchParams('category=backend&sort=latest&search=old');
  const next = withSearch(current, '  TypeScript & React  ');
  assert.equal(next.get('category'), 'backend');
  assert.equal(next.get('sort'), 'latest');
  assert.equal(new URLSearchParams(next.toString()).get('search'), 'TypeScript & React');
  assert.equal(current.get('search'), 'old');
});

test('clearing only the search retains category and sort', () => {
  const next = withSearch(new URLSearchParams('search=old&category=frontend&sort=latest'), '');
  assert.equal(next.has('search'), false);
  assert.equal(next.get('category'), 'frontend');
  assert.equal(next.get('sort'), 'latest');
});

test('whitespace-only input removes search instead of requesting whitespace', () => {
  assert.equal(withSearch(new URLSearchParams('search=old'), '   ').toString(), '');
});
