import { Prisma } from "@prisma/client";
import { Post, NewPost } from "../../../../domain/entities/post.js";
import type { PostDetailsOutput, PostListOutput, PostListPublishedOutput, PostDetailPublishedOutput } from "../../../../application/dto/post.output.js";
type PrismaPost = Prisma.PostGetPayload<{}>;

export type PrismaPostWithRelations = Prisma.PostGetPayload<{
  include: {
    author: {
      include: {
        user: true;
      };
    };
    category: true;
  };
}>;




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
    author: {
              id: prisma.author.id,
              name: prisma.author.name,
              avatarUrl: prisma.author.avatarUrl,
              userId: prisma.author.userId,
              email: prisma.author.user.email,
              bio: prisma.author.bio
            },
    createdAt: prisma.createdAt,
    status: prisma.status,
    category: prisma.category
  }
}

export function toPostListPublishedOutput(prisma:PrismaPostWithRelations ):PostListPublishedOutput {
      
  return {
    id: prisma.id,
    title: prisma.title,
    description: prisma.description,
    slug: prisma.slug,
    author: {
              id: prisma.author.id,
              name: prisma.author.name,
              avatarUrl: prisma.author.avatarUrl,
              userId: prisma.author.userId,
              email: prisma.author.user.email,
              bio: prisma.author.bio
            },
    publishedAt: prisma.publishedAt,
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
    author: {
              id: prisma.author.id,
              name: prisma.author.name,
              avatarUrl: prisma.author.avatarUrl,
              userId: prisma.author.userId,
              email: prisma.author.user.email,    
              bio: prisma.author.bio          
            },
    createdAt: prisma.createdAt,
    status: prisma.status,
    category: prisma.category,
    content: String(prisma.content),
  }
}

export function toPostItemDetailsOutput(prisma:PrismaPostWithRelations ):PostDetailPublishedOutput {
      
  return {
    id: prisma.id,
    title: prisma.title,
    description: prisma.description,
    slug: prisma.slug,
    author: {
              id: prisma.author.id,
              name: prisma.author.name,
              avatarUrl: prisma.author.avatarUrl,
              userId: prisma.author.userId,
              email: prisma.author.user.email,    
              bio: prisma.author.bio          
            },
    publishedAt: prisma.publishedAt,
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
