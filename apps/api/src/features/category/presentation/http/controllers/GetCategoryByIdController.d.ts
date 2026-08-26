import type { FastifyRequest, FastifyReply } from "fastify";
import { GetCategoryByIdUseCase } from "src/features/category/application/use-cases/get-category-by-id-use-case.js";
export declare class GetCategotyByIdController {
    private getCategoryByIdUseCase;
    constructor(getCategoryByIdUseCase: GetCategoryByIdUseCase);
    handle(request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
//# sourceMappingURL=GetCategoryByIdController.d.ts.map