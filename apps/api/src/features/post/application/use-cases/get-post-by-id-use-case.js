import {} from "@post/domain/repositories/IPostRepository.js";
import { PostNotFoundError } from "../errors/post-application-errors.js";
import { toPostDetailsOutput } from "../mappers/post-output-mapper.js";
export class GetPostByIdUseCase {
    iPostRepository;
    constructor(iPostRepository) {
        this.iPostRepository = iPostRepository;
    }
    async execute(id) {
        const result = await this.iPostRepository.findByIdDetails(id);
        if (!result) {
            throw new PostNotFoundError();
        }
        return toPostDetailsOutput(result);
    }
}
//# sourceMappingURL=get-post-by-id-use-case.js.map