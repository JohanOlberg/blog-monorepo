import type { FastifyRequest, FastifyReply } from "fastify";
import { UpdatePostUseCase } from "@post/application/use-cases/update-post-use-case.js";
export declare class UpdatePostController {
    private updatePostUseCase;
    constructor(updatePostUseCase: UpdatePostUseCase);
    handle(request: FastifyRequest, reply: FastifyReply): Promise<undefined>;
}
//# sourceMappingURL=UpdatePostController.d.ts.map