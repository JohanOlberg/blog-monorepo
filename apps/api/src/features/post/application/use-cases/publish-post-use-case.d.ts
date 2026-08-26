import { type IPostRepository } from "@post/domain/repositories/IPostRepository.js";
export declare class PublishPostUseCase {
    private iPostRepository;
    constructor(iPostRepository: IPostRepository);
    execute(id: number): Promise<import("../dto/post.output.js").PostOutput>;
}
//# sourceMappingURL=publish-post-use-case.d.ts.map