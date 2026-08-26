import { ActivateAuthorUserUseCase } from "@author/application/use-cases/activate-author-use-case.js";
import { authorIdParamSchema } from "../schemas/get-author-by-id.schemas.js";
export class ActivateAuthorController {
    activateAuthorUseCase;
    constructor(activateAuthorUseCase) {
        this.activateAuthorUseCase = activateAuthorUseCase;
    }
    async handle(request, reply) {
        const params = authorIdParamSchema.parse(request.params);
        const author = await this.activateAuthorUseCase.execute(params.id);
        return reply.status(200).send(author);
    }
}
//# sourceMappingURL=ActivateAuthorController.js.map