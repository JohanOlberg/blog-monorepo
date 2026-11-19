import test from 'node:test';
import assert from 'node:assert/strict';
import { AxiosError } from 'axios';
import { QueryClient } from '@tanstack/react-query';
import { isNotFoundError, retryPostRequest } from '../src/shared/api/request-error.ts';

function httpError(status) {
  return new AxiosError('Request failed', undefined, undefined, undefined, { status });
}

test('HTTP 404 is distinct from server, timeout, and unrelated errors', () => {
  assert.equal(isNotFoundError(httpError(404)), true);
  assert.equal(isNotFoundError(httpError(503)), false);
  assert.equal(isNotFoundError(new AxiosError('Timeout', 'ECONNABORTED')), false);
  assert.equal(isNotFoundError(new Error('Something else')), false);
});

test('a missing article is requested once, without automatic retries', async () => {
  const client = new QueryClient();
  let attempts = 0;
  const error = httpError(404);
  try {
    await assert.rejects(client.fetchQuery({
      queryKey: ['missing-article'],
      queryFn: () => { attempts++; throw error; },
      retry: retryPostRequest,
      retryDelay: 0,
    }), value => value === error);
    assert.equal(attempts, 1);
  } finally {
    client.clear();
  }
});

test('a temporary failure can recover; repeated timeouts stop after two retries', async () => {
  const client = new QueryClient();
  let attempts = 0;
  try {
    const article = await client.fetchQuery({
      queryKey: ['recovering-article'],
      queryFn: () => {
        attempts++;
        if (attempts < 3) throw httpError(503);
        return { title: 'Recovered article' };
      },
      retry: retryPostRequest,
      retryDelay: 0,
    });
    assert.equal(article.title, 'Recovered article');
    assert.equal(attempts, 3);
    let timeouts = 0;
    await assert.rejects(client.fetchQuery({
      queryKey: ['timed-out-article'],
      queryFn: () => { timeouts++; throw new AxiosError('Timeout', 'ECONNABORTED'); },
      retry: retryPostRequest,
      retryDelay: 0,
    }));
    assert.equal(timeouts, 3);
  } finally {
    client.clear();
  }
});
