
export const routes={
    home:'/',
    posts:{
        list:'/',
        detailPath: '/posts/:id',
        detail:(id:string)=>`/posts/${id}`,
    },
}
