import type { FastifyRequest, FastifyReply } from "fastify";
import { CreatePostUseCase } from "@post/application/use-cases/create-post-use-case.js";
export declare class CreatePostController {
    private createPostUseCase;
    constructor(createPostUseCase: CreatePostUseCase);
    handle(request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
//# sourceMappingURL=CreatePostController.d.ts.map