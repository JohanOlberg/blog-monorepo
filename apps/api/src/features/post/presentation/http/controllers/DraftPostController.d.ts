import type { FastifyRequest, FastifyReply } from "fastify";
import { DraftPostUseCase } from "@post/application/use-cases/draft-post-use-case.js";
export declare class DraftPostController {
    private draftPostUseCase;
    constructor(draftPostUseCase: DraftPostUseCase);
    handle(request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
//# sourceMappingURL=DraftPostController.d.ts.map