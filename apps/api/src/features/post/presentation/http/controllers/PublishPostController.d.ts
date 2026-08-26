import type { FastifyRequest, FastifyReply } from "fastify";
import { PublishPostUseCase } from "@post/application/use-cases/publish-post-use-case.js";
export declare class PublishPostController {
    private publishPostUseCase;
    constructor(publishPostUseCase: PublishPostUseCase);
    handle(request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
//# sourceMappingURL=PublishPostController.d.ts.map