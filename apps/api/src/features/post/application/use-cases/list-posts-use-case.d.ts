import { type IPostRepository } from "@post/domain/repositories/IPostRepository.js";
export declare class ListPostsUseCase {
    private postRepository;
    constructor(postRepository: IPostRepository);
    execute(): Promise<{
        title: string;
        id: number;
        status: import("../../domain/value-objects/post-status.js").PostStatus;
        description: string;
        slug: string;
        category: import("../dto/post.output.js").Category;
        author: import("../dto/post.output.js").Author;
        email: string;
        createdAt: Date;
    }[]>;
}
//# sourceMappingURL=list-posts-use-case.d.ts.map