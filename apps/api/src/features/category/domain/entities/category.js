export class NewCategory {
    props;
    constructor(props) {
        this.props = props;
    }
    getProps() { return this.props; }
    static create(input) {
        if (!input.title || input.title.trim() === "") {
            throw new Error("Category title is required");
        }
        if (!input.slug || input.slug.trim() === "") {
            throw new Error("Category slug is required");
        }
        if (!input.color || input.color.trim() === "") {
            throw new Error("Category color is required");
        }
        return new NewCategory(input);
    }
}
export class Category {
    props;
    constructor(props) {
        this.props = props;
    }
    getProps() { return this.props; }
    updateCategory(input) {
        if (!input.title || input.title.trim() === "") {
            throw new Error("Category title is required");
        }
        if (!input.slug || input.slug.trim() === "") {
            throw new Error("Category slug is required");
        }
        if (!input.color || input.color.trim() === "") {
            throw new Error("Category color is required");
        }
        this.props.title = input.title;
        this.props.slug = input.slug;
        this.props.color = input.color;
    }
    static restore(category) {
        return new Category(category);
    }
}
//# sourceMappingURL=category.js.map