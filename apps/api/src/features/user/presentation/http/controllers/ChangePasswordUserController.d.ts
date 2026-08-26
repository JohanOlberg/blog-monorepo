import type { FastifyRequest, FastifyReply } from "fastify";
import { ChangePasswordUserUseCase } from "@user/application/use-cases/change-password-user-use-case.js";
export declare class ChangePasswordUserController {
    private readonly changePasswordUserUseCase;
    constructor(changePasswordUserUseCase: ChangePasswordUserUseCase);
    handle(request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
//# sourceMappingURL=ChangePasswordUserController.d.ts.map