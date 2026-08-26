import { type IPostRepository } from "@post/domain/repositories/IPostRepository.js";
export declare class DraftPostUseCase {
    private iPostRepository;
    constructor(iPostRepository: IPostRepository);
    execute(id: number): Promise<import("../dto/post.output.js").PostOutput>;
}
//# sourceMappingURL=draft-post-use-case.d.ts.map