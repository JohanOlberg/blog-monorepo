import { Prisma } from "@prisma/client";
import { Post, NewPost } from "@post/domain/entities/post.js";
export function toPrismaCreate(post) {
    const props = post.getProps();
    return {
        title: props.title,
        description: props.description,
        slug: props.slug,
        authorId: props.authorId,
        status: props.status,
        categoryId: props.categoryId,
        content: props.content,
    };
}
export function toPrismaUpdate(post) {
    const props = post.getProps();
    return {
        title: props.title,
        description: props.description,
        slug: props.slug,
        authorId: props.authorId,
        status: props.status,
        categoryId: props.categoryId,
        content: props.content,
        archivedAt: props.archivedAt,
        publishedAt: props.publishedAt,
        updatedAt: props.updatedAt,
    };
}
export function toPostListOutput(prisma) {
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
        },
        createdAt: prisma.createdAt,
        status: prisma.status,
        category: prisma.category
    };
}
export function toPostDetailsOutput(prisma) {
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
        },
        createdAt: prisma.createdAt,
        status: prisma.status,
        category: prisma.category,
        content: String(prisma.content),
    };
}
export function toDomain(prisma) {
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
    });
}
//# sourceMappingURL=prisma-post-mapper.js.map