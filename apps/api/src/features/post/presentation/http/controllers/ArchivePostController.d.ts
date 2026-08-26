import type { FastifyRequest, FastifyReply } from "fastify";
import { ArchivePostUseCase } from "@post/application/use-cases/archive-post-use-case.js";
export declare class ArchivePostController {
    private archivePostUseCase;
    constructor(archivePostUseCase: ArchivePostUseCase);
    handle(request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
//# sourceMappingURL=ArchivePostController.d.ts.map