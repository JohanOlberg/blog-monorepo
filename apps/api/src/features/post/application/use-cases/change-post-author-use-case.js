import {} from "@post/domain/repositories/IPostRepository.js";
import { PostNotFoundError } from "../errors/post-application-errors.js";
import { toPostOutput } from "../mappers/post-output-mapper.js";
export class ChangePostAuthorUseCase {
    iPostRepository;
    constructor(iPostRepository) {
        this.iPostRepository = iPostRepository;
    }
    async execute(postId, authorId) {
        const now = new Date();
        const post = await this.iPostRepository.findById(postId);
        if (!post) {
            throw new PostNotFoundError();
        }
        post.changeAuthor(now, authorId);
        await this.iPostRepository.update(post);
        return toPostOutput(post);
    }
}
//# sourceMappingURL=change-post-author-use-case.js.map