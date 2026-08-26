import type { FastifyRequest, FastifyReply } from "fastify";
import { ChangeAuthorUserUseCase } from "@author/application/use-cases/change-author-user-use-case.js";
export declare class ChangeAuthorUserController {
    private changeAuthorUserUseCase;
    constructor(changeAuthorUserUseCase: ChangeAuthorUserUseCase);
    handle(request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
//# sourceMappingURL=ChangeAuthorUserController.d.ts.map