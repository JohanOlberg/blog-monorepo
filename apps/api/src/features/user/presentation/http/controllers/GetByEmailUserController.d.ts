import type { FastifyRequest, FastifyReply } from "fastify";
import { GetByEmailUseCase } from "@user/application/use-cases/get-by-email-user-use-case.js";
export declare class GetByEmailUserController {
    private readonly getByEmailUserUseCase;
    constructor(getByEmailUserUseCase: GetByEmailUseCase);
    handle(request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
//# sourceMappingURL=GetByEmailUserController.d.ts.map