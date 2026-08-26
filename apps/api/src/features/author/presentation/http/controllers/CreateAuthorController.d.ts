import type { FastifyRequest, FastifyReply } from "fastify";
import { CreateAuthorUseCase } from "@author/application/use-cases/create-author-use-case.js";
export declare class CreateAuthorController {
    private createAuthorUseCase;
    constructor(createAuthorUseCase: CreateAuthorUseCase);
    handle(request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
//# sourceMappingURL=CreateAuthorController.d.ts.map