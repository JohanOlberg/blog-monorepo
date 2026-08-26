import type { FastifyRequest, FastifyReply } from "fastify";
import { ActivateAuthorUserUseCase } from "@author/application/use-cases/activate-author-use-case.js";
export declare class ActivateAuthorController {
    private activateAuthorUseCase;
    constructor(activateAuthorUseCase: ActivateAuthorUserUseCase);
    handle(request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
//# sourceMappingURL=ActivateAuthorController.d.ts.map