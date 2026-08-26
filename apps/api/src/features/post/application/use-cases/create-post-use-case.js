import { NewPost } from "@post/domain/entities/post.js";
import {} from "@post/domain/repositories/IPostRepository.js";
import { SlugAlreadyExistsError } from "../errors/post-application-errors.js";
import { toPostOutput } from "../mappers/post-output-mapper.js";
export class CreatePostUseCase {
    iPostRepository;
    constructor(iPostRepository) {
        this.iPostRepository = iPostRepository;
    }
    async execute(input) {
        const slugAlredyExist = await this.iPostRepository.findBySlug(input.slug);
        if (slugAlredyExist) {
            throw new SlugAlreadyExistsError();
        }
        const newPost = NewPost.create(input);
        const post = await this.iPostRepository.save(newPost);
        return toPostOutput(post);
    }
}
//# sourceMappingURL=create-post-use-case.js.map