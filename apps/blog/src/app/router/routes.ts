
export const routes = {
  home: '/',
  latest: '/?sort=latest',
  posts: {
    detailPath: '/posts/:slug',
    detail: (slug: string) => `/posts/${slug}`,
  },
  about:'/about'
}
