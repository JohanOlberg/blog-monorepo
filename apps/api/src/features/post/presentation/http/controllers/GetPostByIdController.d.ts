import type { FastifyRequest, FastifyReply } from "fastify";
import { GetPostByIdUseCase } from "@post/application/use-cases/get-post-by-id-use-case.js";
export declare class GetPostByIdController {
    private postByIdUseCase;
    constructor(postByIdUseCase: GetPostByIdUseCase);
    handle(request: FastifyRequest, reply: FastifyReply): Promise<undefined>;
}
//# sourceMappingURL=GetPostByIdController.d.ts.map