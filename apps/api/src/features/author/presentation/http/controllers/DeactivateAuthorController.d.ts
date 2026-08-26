import type { FastifyRequest, FastifyReply } from "fastify";
import { DeactivateAuthorUserUseCase } from "@author/application/use-cases/deactivate-author-use-case.js";
export declare class DeactivateAuthorController {
    private deactivateAuthorUseCase;
    constructor(deactivateAuthorUseCase: DeactivateAuthorUserUseCase);
    handle(request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
//# sourceMappingURL=DeactivateAuthorController.d.ts.map