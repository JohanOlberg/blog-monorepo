import { Prisma } from "@prisma/client";
import { Post, NewPost } from "@post/domain/entities/post.js";
import type { PostDetailsOutput, PostListOutput } from "@post/application/dto/post.output.js";
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
export declare function toPrismaCreate(post: NewPost): {
    title: string;
    description: string;
    slug: string;
    authorId: number;
    status: import("../../../../domain/value-objects/post-status.js").PostStatus;
    categoryId: number;
    content: string;
};
export declare function toPrismaUpdate(post: Post): {
    title: string;
    description: string;
    slug: string;
    authorId: number;
    status: import("../../../../domain/value-objects/post-status.js").PostStatus;
    categoryId: number;
    content: string;
    archivedAt: Date | null;
    publishedAt: Date | null;
    updatedAt: Date;
};
export declare function toPostListOutput(prisma: PrismaPostWithRelations): PostListOutput;
export declare function toPostDetailsOutput(prisma: PrismaPostWithRelations): PostDetailsOutput;
export declare function toDomain(prisma: PrismaPost): Post;
export {};
//# sourceMappingURL=prisma-post-mapper.d.ts.map