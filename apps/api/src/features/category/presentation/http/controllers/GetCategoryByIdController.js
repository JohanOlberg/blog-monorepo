import { GetCategoryByIdUseCase } from "src/features/category/application/use-cases/get-category-by-id-use-case.js";
import { categoryIdParamSchema } from "../schemas/get-by-id-category.schemas.js";
export class GetCategotyByIdController {
    getCategoryByIdUseCase;
    constructor(getCategoryByIdUseCase) {
        this.getCategoryByIdUseCase = getCategoryByIdUseCase;
    }
    async handle(request, reply) {
        const params = categoryIdParamSchema.parse(request.body);
        const category = this.getCategoryByIdUseCase.execute(params.id);
        return reply.status(200).send(category);
    }
}
//# sourceMappingURL=GetCategoryByIdController.js.map