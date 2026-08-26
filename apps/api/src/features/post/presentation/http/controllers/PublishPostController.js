import { PublishPostUseCase } from "@post/application/use-cases/publish-post-use-case.js";
import { postIdParamSchema } from "../schemas/get-post-by-id.schema.js";
export class PublishPostController {
    publishPostUseCase;
    constructor(publishPostUseCase) {
        this.publishPostUseCase = publishPostUseCase;
    }
    async handle(request, reply) {
        const params = postIdParamSchema.parse(request.params);
        const postOutput = await this.publishPostUseCase.execute(params.id);
        return reply.status(200).send(postOutput);
    }
}
//# sourceMappingURL=PublishPostController.js.map