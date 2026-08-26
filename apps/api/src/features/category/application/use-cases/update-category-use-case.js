import { toListCategoryOutput } from "../mappers/category-output-mappers.js";
import {} from "../../domain/repositories/ICategoryRepository.js";
export class UpdateCategoryUseCase {
    iCategoryRepository;
    constructor(iCategoryRepository) {
        this.iCategoryRepository = iCategoryRepository;
    }
    async execute(input, id) {
        const result = await this.iCategoryRepository.findById(id);
        if (!result) {
            throw new Error("Category not found");
        }
        result.updateCategory(input);
        const category = await this.iCategoryRepository.update(result);
        return toListCategoryOutput(result);
    }
}
//# sourceMappingURL=update-category-use-case.js.map