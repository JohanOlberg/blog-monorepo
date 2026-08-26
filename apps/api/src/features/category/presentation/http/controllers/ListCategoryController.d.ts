import type { FastifyRequest, FastifyReply } from "fastify";
import { ListCategoryUseCase } from "src/features/category/application/use-cases/list-category-use-case.js";
export declare class ListCategoryController {
    private listCategoryUseCase;
    constructor(listCategoryUseCase: ListCategoryUseCase);
    handle(request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
//# sourceMappingURL=ListCategoryController.d.ts.map