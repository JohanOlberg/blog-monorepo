import { Post, NewPost } from "@post/domain/entities/post.js";
import { type IPostRepository } from "@post/domain/repositories/IPostRepository.js";
import type { PostDetailsOutput, PostListOutput } from "@post/application/dto/post.output.js";
export declare class PrismaPostRepository implements IPostRepository {
    findByIdDetails(id: number): Promise<PostDetailsOutput | null>;
    findAll(): Promise<PostListOutput[]>;
    findBySlug(slug: string): Promise<Post | null>;
    save(newPost: NewPost): Promise<Post>;
    update(post: Post): Promise<void>;
    findById(id: number): Promise<Post | null>;
}
//# sourceMappingURL=prisma-post-repository.d.ts.map