
export const routes = {
  home: '/',
  posts: {
    detailPath: '/posts/:slug',
    detail: (slug: string) => `/posts/${slug}`,
  },
  about:'/about'
}
