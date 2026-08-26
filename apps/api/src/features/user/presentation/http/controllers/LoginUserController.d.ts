import { LoginUserUseCase } from "@user/application/use-cases/login-user-use-case.js";
import type { FastifyRequest, FastifyReply } from "fastify";
export declare class LoginUserController {
    private loginUserUseCase;
    constructor(loginUserUseCase: LoginUserUseCase);
    handle(request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
//# sourceMappingURL=LoginUserController.d.ts.map