import { Prisma } from "@prisma/client";
import { Category, NewCategory } from "src/features/category/domain/entities/category.js";
import type { CategoryOutput } from "src/features/category/application/dto/category.output.js";
type PrismaCategory = Prisma.CategoryGetPayload<{}>;
export declare function toPrismaCreate(category: NewCategory): {
    title: string;
    slug: string;
    color: string;
};
export declare function toPrismaUpdate(category: Category): {
    title: string;
    slug: string;
    color: string;
};
export declare function toCategoryListOutput(props: PrismaCategory): CategoryOutput;
export declare function toDomain(category: PrismaCategory): Category;
export {};
//# sourceMappingURL=prisma-category-mappers.d.ts.map