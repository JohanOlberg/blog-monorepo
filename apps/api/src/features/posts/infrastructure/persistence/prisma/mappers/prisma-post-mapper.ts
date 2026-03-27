import { Prisma } from "@prisma/client";
import { Post } from "../../../../domain/entities/post.js";
import { type Content } from "../../../../domain/value-objects/post-content.js";
type PrismaPost = Prisma.PostGetPayload<{}>;




export function toPostCreatePrisma(post: Post) {
  
    const props = post.getProps()
  return {
    title: props.title,
    description: props.description,
    slug: props.slug,
    authorId: props.authorId,
    status:props.status,
    categoryId:props.categoryId,
    content:props.content,
    publishedAt: props.publishedAt, 
  }
}

export function toPostUpdatePrisma(post: Post) {
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
  }
}


  
export function toPostDomain(prisma:PrismaPost ):Post {
  const content = prisma.content as Content
    
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
    content: {
      image: content.image ,
      text: content.text
    },
    publishedAt: prisma.publishedAt,
    archivedAt: prisma.archivedAt
  })
}
