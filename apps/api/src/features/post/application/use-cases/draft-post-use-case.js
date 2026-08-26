import {} from "@post/domain/repositories/IPostRepository.js";
import { PostNotFoundError } from "../errors/post-application-errors.js";
import { toPostOutput } from "../mappers/post-output-mapper.js";
export class DraftPostUseCase {
    iPostRepository;
    constructor(iPostRepository) {
        this.iPostRepository = iPostRepository;
    }
    async execute(id) {
        const now = new Date();
        const result = await this.iPostRepository.findById(id);
        if (!result) {
            throw new PostNotFoundError();
        }
        result.draft(now);
        await this.iPostRepository.update(result);
        return toPostOutput(result);
    }
}
//# sourceMappingURL=draft-post-use-case.js.map