import { Prisma } from "@prisma/client";
import { Post, NewPost } from "@post/domain/entities/post.js";
import type { PostDetailsOutput, PostListOutput } from "@post/application/dto/post.output.js";
type PrismaPost = Prisma.PostGetPayload<{}>;

type PrismaPostWithRelations = Prisma.PostGetPayload<{
  include: {
    author: true
    category: true
  }
}>





export function toPrismaCreate(post: NewPost) {
  
    const props = post.getProps()
  return {
    title: props.title,
    description: props.description,
    slug: props.slug,
    authorId: props.authorId,
    status:props.status,
    categoryId:props.categoryId,
    content:props.content,
  }
}

export function toPrismaUpdate(post: Post) {
    const props = post.getProps()
  return {
    title: props.title,
    description: props.description,
    slug: props.slug,
    authorId: props.authorId,
    status:props.status,
    categoryId:props.categoryId,
    content:props.content,    
    archivedAt: props.archivedAt,
    publishedAt: props.publishedAt,    
    updatedAt: props.updatedAt,  
  }
}

  
export function toPostListOutput(prisma:PrismaPostWithRelations ):PostListOutput {
      
  return {
    id: prisma.id,
    title: prisma.title,
    description: prisma.description,
    slug: prisma.slug,
    author: prisma.author,
    createdAt: prisma.createdAt,
    status: prisma.status,
    category: prisma.category
  }
}

  
export function toPostDetailsOutput(prisma:PrismaPostWithRelations ):PostDetailsOutput {
      
  return {
    id: prisma.id,
    title: prisma.title,
    description: prisma.description,
    slug: prisma.slug,
    author: prisma.author,
    createdAt: prisma.createdAt,
    status: prisma.status,
    category: prisma.category,
    content: String(prisma.content),
  }
}


  
export function toDomain(prisma:PrismaPost ):Post {
      
  return Post.restore({
    id: prisma.id,
    title: prisma.title,
    description: prisma.description,
    slug: prisma.slug,
    authorId: prisma.authorId,
    createdAt: prisma.createdAt,
    updatedAt: prisma.updatedAt,
    status: prisma.status,
    categoryId: prisma.categoryId,
    content: String(prisma.content),
    publishedAt: prisma.publishedAt,
    archivedAt: prisma.archivedAt
  })
}
