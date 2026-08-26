import { AppError } from "@shared/kernel/errors/app-error.js";
export declare class PostError extends AppError {
}
export declare class CategoryRequiredError extends PostError {
    constructor();
}
export declare class AuthorRequiredError extends PostError {
    constructor();
}
export declare class TitleRequiredError extends PostError {
    constructor();
}
export declare class DescriptionRequiredError extends PostError {
    constructor();
}
export declare class SlugRequiredError extends PostError {
    constructor();
}
export declare class ContentRequiredError extends PostError {
    constructor();
}
export declare class TitleLengthError extends PostError {
    constructor();
}
export declare class DescriptionLengthError extends PostError {
    constructor();
}
export declare class SlugLengthError extends PostError {
    constructor();
}
export declare class SlugFormatError extends PostError {
    constructor();
}
export declare class InvalidPostStatusError extends PostError {
    constructor();
}
//# sourceMappingURL=post-errors.d.ts.map