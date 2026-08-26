import type { FastifyRequest, FastifyReply } from "fastify";
import { CreateCategoryUseCase } from "src/features/category/application/use-cases/create-category-use-case.js";
export declare class CreateCategoryController {
    private createCategoryUseCase;
    constructor(createCategoryUseCase: CreateCategoryUseCase);
    handle(request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
//# sourceMappingURL=CreateCategoryController.d.ts.map