export declare class Slug {
    private readonly slug;
    constructor(slug: string);
    static formatSlug(text: string): string;
    static createSlug(newSlug: string): Slug;
    static validateSlug(slug: string): string;
    getValue(): string;
}
//# sourceMappingURL=post-slug.d.ts.map