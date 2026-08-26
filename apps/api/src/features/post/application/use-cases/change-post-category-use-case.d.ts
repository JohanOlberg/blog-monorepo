import { type IPostRepository } from "@post/domain/repositories/IPostRepository.js";
export declare class ChangePostCategoryUseCase {
    private iPostRepository;
    constructor(iPostRepository: IPostRepository);
    execute(postId: number, categoryId: number): Promise<import("../dto/post.output.js").PostOutput>;
}
//# sourceMappingURL=change-post-category-use-case.d.ts.map