import { GetAllAuthorsUseCase } from "@author/application/use-cases/list-author-use-case.js";
export class ListAuthorController {
    getAllAuthorsUseCase;
    constructor(getAllAuthorsUseCase) {
        this.getAllAuthorsUseCase = getAllAuthorsUseCase;
    }
    async handle(request, reply) {
        const authors = await this.getAllAuthorsUseCase.execute();
        return reply.status(200).send(authors);
    }
}
//# sourceMappingURL=ListAuthorController.js.map