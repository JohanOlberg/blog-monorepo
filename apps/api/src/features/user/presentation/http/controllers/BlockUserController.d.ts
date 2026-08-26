import type { FastifyRequest, FastifyReply } from "fastify";
import { BlockUserUseCase } from "@user/application/use-cases/block-user-use-case.js";
export declare class BlockUserController {
    private readonly blockUserUseCase;
    constructor(blockUserUseCase: BlockUserUseCase);
    handle(request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
//# sourceMappingURL=BlockUserController.d.ts.map