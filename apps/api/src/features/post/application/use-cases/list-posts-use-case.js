import {} from "@post/domain/repositories/IPostRepository.js";
import { toPostListOutput } from "../mappers/post-output-mapper.js";
export class ListPostsUseCase {
    postRepository;
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    async execute() {
        const result = await this.postRepository.findAll();
        if (!result) {
            return [];
        }
        return result.map(toPostListOutput);
    }
}
//# sourceMappingURL=list-posts-use-case.js.map