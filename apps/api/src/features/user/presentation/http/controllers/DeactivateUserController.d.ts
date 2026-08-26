import type { FastifyRequest, FastifyReply } from "fastify";
import { DeactivateUserUseCase } from "@user/application/use-cases/deactivate-user-use-case.js";
export declare class DeactivateUserController {
    private readonly deactivateUseCase;
    constructor(deactivateUseCase: DeactivateUserUseCase);
    handle(request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
//# sourceMappingURL=DeactivateUserController.d.ts.map