import { Category, NewCategory } from "src/features/category/domain/entities/category.js";
import {} from "src/features/category/domain/repositories/ICategoryRepository.js";
import { toPrismaCreate, toCategoryListOutput, toPrismaUpdate, toDomain } from "../mappers/prisma-category-mappers.js";
import { prisma } from "@shared/infrastructure/database/prisma/prisma-client.js";
export class PrismaCategoryRepository {
    async save(newCategory) {
        const category = await prisma.category.create({ data: toPrismaCreate(newCategory) });
        return toDomain(category);
    }
    async update(category) {
        const props = category.getProps();
        const id = props.id;
        if (id === undefined) {
            throw new Error("Category Not Found!");
        }
        const exist = await prisma.category.findUnique({
            where: {
                id: id
            },
            select: {
                id: true
            }
        });
        if (!exist) {
            throw new Error("Category Not Found!");
        }
        const result = await prisma.category.update({
            where: {
                id: props.id,
            },
            data: toPrismaUpdate(category)
        });
    }
    async findById(id) {
        if (id === undefined) {
            throw new Error("Category Not Found!");
        }
        const result = await prisma.category.findUnique({
            where: {
                id: id
            }
        });
        if (!result) {
            throw new Error("Category Not Found!");
        }
        return toDomain(result);
    }
    async findAll() {
        const result = await prisma.category.findMany();
        return result.map(toCategoryListOutput);
    }
}
//# sourceMappingURL=prisma-category-repository.js.map