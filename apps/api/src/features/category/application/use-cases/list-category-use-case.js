import { toListCategoryOutput } from "../mappers/category-output-mappers.js";
import {} from "../../domain/repositories/ICategoryRepository.js";
export class ListCategoryUseCase {
    iCategoryRepository;
    constructor(iCategoryRepository) {
        this.iCategoryRepository = iCategoryRepository;
    }
    async execute() {
        const result = await this.iCategoryRepository.findAll();
        if (!result) {
            throw new Error("Category not found");
        }
        return result; //.map(toListCategoryOutput)
    }
}
//# sourceMappingURL=list-category-use-case.js.map