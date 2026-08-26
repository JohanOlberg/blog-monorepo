import { type ICategoryRepository } from "../../domain/repositories/ICategoryRepository.js";
export declare class ListCategoryUseCase {
    private iCategoryRepository;
    constructor(iCategoryRepository: ICategoryRepository);
    execute(): Promise<import("../dto/category.output.js").CategoryOutput[]>;
}
//# sourceMappingURL=list-category-use-case.d.ts.map