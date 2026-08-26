import { Category } from "../../domain/entities/category.js";
export function toListCategoryOutput(category) {
    const props = category.getProps();
    return {
        id: props.id,
        title: props.title,
        slug: props.slug,
        color: props.color
    };
}
//# sourceMappingURL=category-output-mappers.js.map