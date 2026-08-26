import { ListCategoryUseCase } from "src/features/category/application/use-cases/list-category-use-case.js";
export class ListCategoryController {
    listCategoryUseCase;
    constructor(listCategoryUseCase) {
        this.listCategoryUseCase = listCategoryUseCase;
    }
    async handle(request, reply) {
        const category = await this.listCategoryUseCase.execute();
        return reply.status(200).send(category);
    }
}
//# sourceMappingURL=ListCategoryController.js.map