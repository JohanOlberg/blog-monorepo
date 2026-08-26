import type { FastifyRequest, FastifyReply } from "fastify";
import { UpdateUserUseCase } from "@user/application/use-cases/update-user-use-case.js";
export declare class UpdateUserController {
    private readonly updateUserUseCase;
    constructor(updateUserUseCase: UpdateUserUseCase);
    handle(request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
//# sourceMappingURL=UpdateUserController.d.ts.map