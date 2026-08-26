import { type IPostRepository } from "@post/domain/repositories/IPostRepository.js";
import type { UpdatePostInput } from "../dto/post.input.js";
export declare class UpdatePostUseCase {
    private iPostRepository;
    constructor(iPostRepository: IPostRepository);
    execute(input: UpdatePostInput, id: number): Promise<import("../dto/post.output.js").PostOutput>;
}
//# sourceMappingURL=update-post-use-case.d.ts.map