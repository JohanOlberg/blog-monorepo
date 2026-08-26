import type { FastifyRequest, FastifyReply } from "fastify";
import { ChangePostCategoryUseCase } from "@post/application/use-cases/change-post-category-use-case.js";
export declare class ChangePostCategoryController {
    private changePostCategoryUseCase;
    constructor(changePostCategoryUseCase: ChangePostCategoryUseCase);
    handle(request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
//# sourceMappingURL=ChangePostCategoryController.d.ts.map