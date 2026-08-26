import {} from "@post/domain/repositories/IPostRepository.js";
import { PostNotFoundError } from "../errors/post-application-errors.js";
import { toPostOutput } from "../mappers/post-output-mapper.js";
export class ArchivePostUseCase {
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
        result.archive(now);
        await this.iPostRepository.update(result);
        return toPostOutput(result);
    }
}
//# sourceMappingURL=archive-post-use-case.js.map