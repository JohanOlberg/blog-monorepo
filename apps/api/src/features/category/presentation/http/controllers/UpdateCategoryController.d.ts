import type { FastifyRequest, FastifyReply } from "fastify";
import { UpdateCategoryUseCase } from "src/features/category/application/use-cases/update-category-use-case.js";
export declare class UpdateCategoryController {
    private updateCategoryUseCase;
    constructor(updateCategoryUseCase: UpdateCategoryUseCase);
    handle(request: FastifyRequest, reply: FastifyReply): Promise<void>;
}
//# sourceMappingURL=UpdateCategoryController.d.ts.map