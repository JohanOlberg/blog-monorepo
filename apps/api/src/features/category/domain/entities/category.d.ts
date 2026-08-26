interface NewCategoryProps {
    title: string;
    slug: string;
    color: string;
}
export declare class NewCategory {
    private readonly props;
    private constructor();
    getProps(): NewCategoryProps;
    static create(input: NewCategoryProps): NewCategory;
}
interface CategoryProps {
    id: number;
    title: string;
    slug: string;
    color: string;
}
interface CategoryUpdateProps {
    title: string;
    slug: string;
    color: string;
}
export declare class Category {
    private props;
    private constructor();
    getProps(): CategoryProps;
    updateCategory(input: CategoryUpdateProps): void;
    static restore(category: CategoryProps): Category;
}
export {};
//# sourceMappingURL=category.d.ts.map