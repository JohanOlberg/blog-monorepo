import { Post } from "src/features/post/domain/entities/post.js"
import type { PostOutput, PostListOutput } from "src/features/post/application/dto/post.output.js" 

export function toPostOutput (post: Post): PostOutput  {
    const props = post.getProps()
    return {
        title:props.title,
        id:props.id,
        status:props.status,
        description:props.description,
        slug:props.slug,
        categoryId:props.categoryId,  
        authorId:props.authorId , 
        createdAt:props.createdAt ,
        updatedAt:props.updatedAt ,
        publishedAt:props.publishedAt,
        archivedAt:props.archivedAt,
        content:props.content
    }
}

export function toPostListOutput (post: Post): PostListOutput  {
    const props = post.getProps()
    return {
        title:props.title,
        id:props.id,
        status:props.status,
        description:props.description,
        slug:props.slug,
        categoryId:props.categoryId,  
        authorId:props.authorId , 
        createdAt:props.createdAt ,
    }
}
