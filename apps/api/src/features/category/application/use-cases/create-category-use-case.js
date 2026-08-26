import { toListCategoryOutput } from "../mappers/category-output-mappers.js";
import {} from "../../domain/repositories/ICategoryRepository.js";
import { NewCategory } from "../../domain/entities/category.js";
export class CreateCategoryUseCase {
    iCategoryRepository;
    constructor(iCategoryRepository) {
        this.iCategoryRepository = iCategoryRepository;
    }
    async execute(input) {
        const newCategory = NewCategory.create(input);
        const category = await this.iCategoryRepository.save(newCategory);
        return toListCategoryOutput(category);
    }
}
//# sourceMappingURL=create-category-use-case.js.map