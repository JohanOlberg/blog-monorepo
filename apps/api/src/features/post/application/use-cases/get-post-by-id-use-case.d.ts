import { type IPostRepository } from "@post/domain/repositories/IPostRepository.js";
export declare class GetPostByIdUseCase {
    private iPostRepository;
    constructor(iPostRepository: IPostRepository);
    execute(id: number): Promise<{
        title: string;
        id: number;
        status: import("../../domain/value-objects/post-status.js").PostStatus;
        description: string;
        content: string;
        slug: string;
        category: import("../dto/post.output.js").Category;
        author: import("../dto/post.output.js").Author;
        email: string;
        createdAt: Date;
    }>;
}
//# sourceMappingURL=get-post-by-id-use-case.d.ts.map