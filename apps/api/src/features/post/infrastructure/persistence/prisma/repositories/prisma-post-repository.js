import { Post, NewPost } from "@post/domain/entities/post.js";
import {} from "@post/domain/repositories/IPostRepository.js";
import { toPrismaCreate, toDomain, toPrismaUpdate, toPostListOutput, toPostDetailsOutput } from "../mappers/prisma-post-mapper.js";
import { prisma } from "@shared/infrastructure/database/prisma/prisma-client.js";
export class PrismaPostRepository {
    async findByIdDetails(id) {
        if (id === undefined) {
            throw new Error("Post Not Found!");
        }
        const post = await prisma.post.findUnique({
            include: {
                author: {
                    include: {
                        user: true,
                    },
                },
                category: true
            },
            where: {
                id: id
            },
        });
        if (!post) {
            return null;
        }
        return toPostDetailsOutput(post);
    }
    async findAll() {
        const posts = await prisma.post.findMany({
            include: {
                author: {
                    include: {
                        user: true,
                    },
                },
                category: true
            }
        });
        return posts.map(toPostListOutput);
    }
    async findBySlug(slug) {
        const result = await prisma.post.findUnique({
            where: {
                slug: slug
            },
        });
        if (!result) {
            return null;
        }
        return toDomain(result);
    }
    async save(newPost) {
        const post = await prisma.post.create({ data: toPrismaCreate(newPost) });
        return toDomain(post);
    }
    async update(post) {
        const props = post.getProps();
        if (props.id === undefined) {
            throw new Error("Post Not Found!");
        }
        const exist = await prisma.post.findUnique({
            where: {
                id: props.id
            },
            select: {
                id: true
            }
        });
        if (!exist) {
            throw new Error("Post Not Found!");
        }
        await prisma.post.update({
            where: { id: props.id },
            data: toPrismaUpdate(post)
        });
    }
    async findById(id) {
        if (id === undefined) {
            throw new Error("Post Not Found!");
        }
        const post = await prisma.post.findUnique({
            where: {
                id: id
            },
        });
        if (!post) {
            return null;
        }
        return toDomain(post);
    }
}
//# sourceMappingURL=prisma-post-repository.js.map