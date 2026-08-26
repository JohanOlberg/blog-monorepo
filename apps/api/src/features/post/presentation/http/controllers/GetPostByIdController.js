import { GetPostByIdUseCase } from "@post/application/use-cases/get-post-by-id-use-case.js";
import { postIdParamSchema } from "../schemas/get-post-by-id.schema.js";
export class GetPostByIdController {
    postByIdUseCase;
    constructor(postByIdUseCase) {
        this.postByIdUseCase = postByIdUseCase;
    }
    async handle(request, reply) {
        const params = postIdParamSchema.parse(request.params);
        const postOutput = await this.postByIdUseCase.execute(params.id);
        if (postOutput) {
            return reply.status(200).send(postOutput);
        }
    }
}
//# sourceMappingURL=GetPostByIdController.js.map