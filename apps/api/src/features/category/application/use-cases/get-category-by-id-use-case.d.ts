import { type ICategoryRepository } from "../../domain/repositories/ICategoryRepository.js";
export declare class GetCategoryByIdUseCase {
    private iCategoryRepository;
    constructor(iCategoryRepository: ICategoryRepository);
    execute(id: number): Promise<{
        id: number;
        title: string;
        slug: string;
        color: string;
    }>;
}
//# sourceMappingURL=get-category-by-id-use-case.d.ts.map