import { DeactivateAuthorUserUseCase } from "@author/application/use-cases/deactivate-author-use-case.js";
import { authorIdParamSchema } from "../schemas/get-author-by-id.schemas.js";
export class DeactivateAuthorController {
    deactivateAuthorUseCase;
    constructor(deactivateAuthorUseCase) {
        this.deactivateAuthorUseCase = deactivateAuthorUseCase;
    }
    async handle(request, reply) {
        const params = authorIdParamSchema.parse(request.params);
        const author = await this.deactivateAuthorUseCase.execute(params.id);
        return reply.status(200).send(author);
    }
}
//# sourceMappingURL=DeactivateAuthorController.js.map