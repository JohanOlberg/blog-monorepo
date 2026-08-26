import { type IPostRepository } from "@post/domain/repositories/IPostRepository.js";
export declare class ChangePostAuthorUseCase {
    private iPostRepository;
    constructor(iPostRepository: IPostRepository);
    execute(postId: number, authorId: number): Promise<import("../dto/post.output.js").PostOutput>;
}
//# sourceMappingURL=change-post-author-use-case.d.ts.map