import type { FastifyRequest, FastifyReply } from "fastify";
import { GetAllAuthorsUseCase } from "@author/application/use-cases/list-author-use-case.js";
export declare class ListAuthorController {
    private getAllAuthorsUseCase;
    constructor(getAllAuthorsUseCase: GetAllAuthorsUseCase);
    handle(request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
//# sourceMappingURL=ListAuthorController.d.ts.map