import { postIdParamSchema } from "../schemas/get-post-by-id.schema.js";
import { changePostAuthorSchema } from "../schemas/change-post-author.schema.js";
import { ChangePostAuthorUseCase } from "@post/application/use-cases/change-post-author-use-case.js";
export class ChangePostAuthorController {
    changePostAuthorUseCase;
    constructor(changePostAuthorUseCase) {
        this.changePostAuthorUseCase = changePostAuthorUseCase;
    }
    async handle(request, reply) {
        const params = postIdParamSchema.parse(request.params);
        const body = changePostAuthorSchema.parse(request.body);
        const postOutput = await this.changePostAuthorUseCase.execute(params.id, body.authorId);
        return reply.status(200).send(postOutput);
    }
}
//# sourceMappingURL=ChangePostAuthorController.js.map