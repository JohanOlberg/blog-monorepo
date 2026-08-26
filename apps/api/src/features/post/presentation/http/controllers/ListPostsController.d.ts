import type { FastifyRequest, FastifyReply } from "fastify";
import { ListPostsUseCase } from "@post/application/use-cases/list-posts-use-case.js";
export declare class ListPostsController {
    private listPostUseCase;
    constructor(listPostUseCase: ListPostsUseCase);
    handle(request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
//# sourceMappingURL=ListPostsController.d.ts.map