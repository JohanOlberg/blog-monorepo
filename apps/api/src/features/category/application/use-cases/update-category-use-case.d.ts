import { type ICategoryRepository } from "../../domain/repositories/ICategoryRepository.js";
import type { UpdateCategoryInput } from "../dto/category.input.js";
export declare class UpdateCategoryUseCase {
    private iCategoryRepository;
    constructor(iCategoryRepository: ICategoryRepository);
    execute(input: UpdateCategoryInput, id: number): Promise<{
        id: number;
        title: string;
        slug: string;
        color: string;
    }>;
}
//# sourceMappingURL=update-category-use-case.d.ts.map