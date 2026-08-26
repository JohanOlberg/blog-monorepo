import type { FastifyRequest, FastifyReply } from "fastify";
import { ChangePostAuthorUseCase } from "@post/application/use-cases/change-post-author-use-case.js";
export declare class ChangePostAuthorController {
    private changePostAuthorUseCase;
    constructor(changePostAuthorUseCase: ChangePostAuthorUseCase);
    handle(request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
//# sourceMappingURL=ChangePostAuthorController.d.ts.map