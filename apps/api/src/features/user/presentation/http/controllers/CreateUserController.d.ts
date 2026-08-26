import type { FastifyRequest, FastifyReply } from "fastify";
import { CreateUserUseCase } from "@user/application/use-cases/create-user-use-case.js";
export declare class CreateUserController {
    private readonly createUserUseCase;
    constructor(createUserUseCase: CreateUserUseCase);
    handle(request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
//# sourceMappingURL=CreateUserController.d.ts.map