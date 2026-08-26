import { postIdParamSchema } from "../schemas/get-post-by-id.schema.js";
//import { changePostCategorySchema } from "../schemas/change-post-category.schema.js"
import { changePostCategorySchema } from "../schemas/change-post-category.schema.js";
import { ChangePostCategoryUseCase } from "@post/application/use-cases/change-post-category-use-case.js";
export class ChangePostCategoryController {
    changePostCategoryUseCase;
    constructor(changePostCategoryUseCase) {
        this.changePostCategoryUseCase = changePostCategoryUseCase;
    }
    async handle(request, reply) {
        const params = postIdParamSchema.parse(request.params);
        const body = changePostCategorySchema.parse(request.body);
        const postOutput = await this.changePostCategoryUseCase.execute(params.id, body.categoryId);
        return reply.status(200).send(postOutput);
    }
}
//# sourceMappingURL=ChangePostCategoryController.js.map