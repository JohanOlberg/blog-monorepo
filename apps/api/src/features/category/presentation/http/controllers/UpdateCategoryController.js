import { UpdateCategoryUseCase } from "src/features/category/application/use-cases/update-category-use-case.js";
import { updateCategorySchemas } from "../schemas/update-category.schemas.js";
import { categoryIdParamSchema } from "../schemas/get-by-id-category.schemas.js";
export class UpdateCategoryController {
    updateCategoryUseCase;
    constructor(updateCategoryUseCase) {
        this.updateCategoryUseCase = updateCategoryUseCase;
    }
    async handle(request, reply) {
        const params = categoryIdParamSchema.parse(request.params);
        const body = updateCategorySchemas.parse(request.body);
        const categoryOutput = await this.updateCategoryUseCase.execute(body, params.id);
    }
}
//# sourceMappingURL=UpdateCategoryController.js.map