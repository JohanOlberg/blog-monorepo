

export type CreatePostInput = {
    title:string
    id:string
    description:string
    categorie?:string
    content?:string 
    author:string
}

export type PostsListInput = {
    title:string
    id:string
    status:string
    description:string
    categorie:string
    content:string 
    author:string
    createdAt: Date
    updatedAt: Date
    publishedAt: Date | null
    archivedAt: Date | null
}