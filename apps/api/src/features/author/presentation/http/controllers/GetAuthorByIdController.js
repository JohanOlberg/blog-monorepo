import { GetAuthorByIdUseCase } from "src/features/author/application/use-cases/get-author-by-id-use-case.js";
import { authorIdParamSchema } from "../schemas/get-author-by-id.schemas.js";
export class GetAuthorByIdController {
    getAuthorByIdUseCase;
    constructor(getAuthorByIdUseCase) {
        this.getAuthorByIdUseCase = getAuthorByIdUseCase;
    }
    async handle(request, reply) {
        const params = authorIdParamSchema.parse(request.params);
        const author = await this.getAuthorByIdUseCase.execute(params.id);
        return reply.status(200).send(author);
    }
}
//# sourceMappingURL=GetAuthorByIdController.js.map