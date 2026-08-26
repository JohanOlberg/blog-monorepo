import type { FastifyRequest, FastifyReply } from "fastify";
import { GetAuthorByIdUseCase } from "src/features/author/application/use-cases/get-author-by-id-use-case.js";
export declare class GetAuthorByIdController {
    private getAuthorByIdUseCase;
    constructor(getAuthorByIdUseCase: GetAuthorByIdUseCase);
    handle(request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
//# sourceMappingURL=GetAuthorByIdController.d.ts.map