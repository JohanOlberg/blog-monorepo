import { Prisma } from "@prisma/client";
import { Category, NewCategory } from "src/features/category/domain/entities/category.js";
export function toPrismaCreate(category) {
    const props = category.getProps();
    return {
        title: props.title,
        slug: props.slug,
        color: props.color
    };
}
export function toPrismaUpdate(category) {
    const props = category.getProps();
    return {
        title: props.title,
        slug: props.slug,
        color: props.color
    };
}
export function toCategoryListOutput(props) {
    return {
        id: props.id,
        title: props.title,
        slug: props.slug,
        color: props.color,
    };
}
export function toDomain(category) {
    return Category.restore({
        id: category.id,
        title: category.title,
        color: category.color,
        slug: category.slug
    });
}
//# sourceMappingURL=prisma-category-mappers.js.map