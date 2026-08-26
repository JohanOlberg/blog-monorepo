
export const routes={
    home:'/',
    postsItem:{
        list:'/',
        detailPath: '/posts/:slug',
        detail: (slug: string) => `/posts/${slug}`,
    },
}
