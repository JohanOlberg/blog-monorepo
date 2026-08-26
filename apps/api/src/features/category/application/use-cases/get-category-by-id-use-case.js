import { toListCategoryOutput } from "../mappers/category-output-mappers.js";
import {} from "../../domain/repositories/ICategoryRepository.js";
export class GetCategoryByIdUseCase {
    iCategoryRepository;
    constructor(iCategoryRepository) {
        this.iCategoryRepository = iCategoryRepository;
    }
    async execute(id) {
        const result = await this.iCategoryRepository.findById(id);
        if (!result) {
            throw new Error("Category not found");
        }
        return toListCategoryOutput(result);
    }
}
//# sourceMappingURL=get-category-by-id-use-case.js.map