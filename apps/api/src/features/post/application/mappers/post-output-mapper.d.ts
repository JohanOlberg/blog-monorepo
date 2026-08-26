import { Post } from "@post/domain/entities/post.js";
import type { PostOutput, PostListOutput, PostDetailsOutput } from "@post/application/dto/post.output.js";
export declare function toPostOutput(post: Post): PostOutput;
export declare function toPostListOutput(post: PostListOutput): {
    title: string;
    id: number;
    status: import("../../domain/value-objects/post-status.js").PostStatus;
    description: string;
    slug: string;
    category: import("@post/application/dto/post.output.js").Category;
    author: import("@post/application/dto/post.output.js").Author;
    email: string;
    createdAt: Date;
};
export declare function toPostDetailsOutput(post: PostDetailsOutput): {
    title: string;
    id: number;
    status: import("../../domain/value-objects/post-status.js").PostStatus;
    description: string;
    content: string;
    slug: string;
    category: import("@post/application/dto/post.output.js").Category;
    author: import("@post/application/dto/post.output.js").Author;
    email: string;
    createdAt: Date;
};
//# sourceMappingURL=post-output-mapper.d.ts.map