import { CreateCategoryUseCase } from "src/features/category/application/use-cases/create-category-use-case.js";
import { createCategorySchemas } from "../schemas/create-category.schemas.js";
export class CreateCategoryController {
    createCategoryUseCase;
    constructor(createCategoryUseCase) {
        this.createCategoryUseCase = createCategoryUseCase;
    }
    async handle(request, reply) {
        const body = createCategorySchemas.parse(request.body);
        const category = this.createCategoryUseCase.execute(body);
        return reply.status(201).send(category);
    }
}
//# sourceMappingURL=CreateCategoryController.js.map