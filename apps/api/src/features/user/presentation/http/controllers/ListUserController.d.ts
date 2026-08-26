import type { FastifyRequest, FastifyReply } from "fastify";
import { ListUserUseCase } from "@user/application/use-cases/list-user-use-case.js";
export declare class ListUserController {
    private readonly listUserUseCase;
    constructor(listUserUseCase: ListUserUseCase);
    handle(request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
//# sourceMappingURL=ListUserController.d.ts.map