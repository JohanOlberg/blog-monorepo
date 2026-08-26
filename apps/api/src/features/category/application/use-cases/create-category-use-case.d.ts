import { type ICategoryRepository } from "../../domain/repositories/ICategoryRepository.js";
import type { CreateCategoryInput } from "../dto/category.input.js";
export declare class CreateCategoryUseCase {
    private iCategoryRepository;
    constructor(iCategoryRepository: ICategoryRepository);
    execute(input: CreateCategoryInput): Promise<{
        id: number;
        title: string;
        slug: string;
        color: string;
    }>;
}
//# sourceMappingURL=create-category-use-case.d.ts.map