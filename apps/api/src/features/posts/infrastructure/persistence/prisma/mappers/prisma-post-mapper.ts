import { Prisma } from "@prisma/client";

type PrismaPost = Prisma.PostGetPayload<{}>;

import { Post } from "../../../../domain/entities/post";




export function toPostPrisma(post: Post) {
    const props = post.getProps()
  return {
    id: Number(props.id),
    title: props.title,
    description: props.description,
    authorId: props.authorId,
    createdAt: props.createdAt,
    updatedAt: props.updatedAt,
    status:props.status,
    categoryId:props.categoryId,
    content:props.content,
    publishedAt: props.publishedAt,
    archivedAt: props.archivedAt,    
  }
}
  
export function toPostDomain(prisma:PrismaPost ):Post {
    
  return Post.restore({
    id: String(prisma.id),
    title: prisma.title,
    description: prisma.description,
    authorId: prisma.authorId,
    createdAt: prisma.createdAt,
    updatedAt: prisma.updatedAt,
    status: prisma.status,
    categoryId: null,
    content: {
      image: undefined,
      text: ""
    },
    publishedAt: null,
    archivedAt: null
  })
}
