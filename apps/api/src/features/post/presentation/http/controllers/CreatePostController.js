import { CreatePostUseCase } from "@post/application/use-cases/create-post-use-case.js";
import { createPostSchema } from "@post/presentation/http/schemas/create-post.schema.js";
export class CreatePostController {
    createPostUseCase;
    constructor(createPostUseCase) {
        this.createPostUseCase = createPostUseCase;
    }
    async handle(request, reply) {
        const body = createPostSchema.parse(request.body);
        const postOutput = await this.createPostUseCase.execute(body);
        return reply.status(201).send(postOutput);
    }
}
//# sourceMappingURL=CreatePostController.js.map