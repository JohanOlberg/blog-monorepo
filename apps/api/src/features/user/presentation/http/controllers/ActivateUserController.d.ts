import type { FastifyRequest, FastifyReply } from "fastify";
import { ActivateUserUseCase } from "@user/application/use-cases/active-user-use-case.js";
export declare class ActivateUserController {
    private readonly activateUseCase;
    constructor(activateUseCase: ActivateUserUseCase);
    handle(request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
//# sourceMappingURL=ActivateUserController.d.ts.map