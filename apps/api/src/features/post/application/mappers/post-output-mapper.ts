import { Post } from "@post/domain/entities/post.js"
import type { PostOutput, PostListOutput, PostDetailsOutput } from "@post/application/dto/post.output.js" 

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

export function toPostListOutput (post: PostListOutput)  {
    const props = post
    return {
        title:props.title,
        id:props.id,
        status:props.status,
        description:props.description,
        slug:props.slug,
        category:props.category,  
        author:props.author , 
        createdAt:props.createdAt ,
    }
}

export function toPostDetailsOutput (post: PostDetailsOutput)  {
    const props = post
    return {
        title:props.title,
        id:props.id,
        status:props.status,
        description:props.description,
        content:props.content,
        slug:props.slug,
        category:props.category,  
        author:props.author , 
        createdAt:props.createdAt ,
    }
}

