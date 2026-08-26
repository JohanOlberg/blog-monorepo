import { type IPostRepository } from "@post/domain/repositories/IPostRepository.js";
import type { CreatePostInput } from "../dto/post.input.js";
export declare class CreatePostUseCase {
    private iPostRepository;
    constructor(iPostRepository: IPostRepository);
    execute(input: CreatePostInput): Promise<import("../dto/post.output.js").PostOutput>;
}
//# sourceMappingURL=create-post-use-case.d.ts.map