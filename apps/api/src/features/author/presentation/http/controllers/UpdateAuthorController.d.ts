import type { FastifyRequest, FastifyReply } from "fastify";
import { UpdateAuthorUserUseCase } from "@author/application/use-cases/update-author-use-case.js";
export declare class UpdateAuthorController {
    private updateAuthorUseCase;
    constructor(updateAuthorUseCase: UpdateAuthorUserUseCase);
    handle(request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
//# sourceMappingURL=UpdateAuthorController.d.ts.map