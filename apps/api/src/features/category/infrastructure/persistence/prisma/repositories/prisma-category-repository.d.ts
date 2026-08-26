import { Category, NewCategory } from "src/features/category/domain/entities/category.js";
import { type ICategoryRepository } from "src/features/category/domain/repositories/ICategoryRepository.js";
import type { CategoryOutput } from "src/features/category/application/dto/category.output.js";
export declare class PrismaCategoryRepository implements ICategoryRepository {
    save(newCategory: NewCategory): Promise<Category>;
    update(category: Category): Promise<void>;
    findById(id: number): Promise<Category | null>;
    findAll(): Promise<CategoryOutput[]>;
}
//# sourceMappingURL=prisma-category-repository.d.ts.map