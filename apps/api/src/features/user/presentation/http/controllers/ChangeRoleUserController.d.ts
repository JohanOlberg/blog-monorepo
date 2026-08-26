import type { FastifyRequest, FastifyReply } from "fastify";
import { ChangeUserRoleUseCase } from "@user/application/use-cases/change-role-user-use-case.js";
export declare class ChangeUserRoleController {
    private readonly changeUserRoleUseCase;
    constructor(changeUserRoleUseCase: ChangeUserRoleUseCase);
    handle(request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
//# sourceMappingURL=ChangeRoleUserController.d.ts.map