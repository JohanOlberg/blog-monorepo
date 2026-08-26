import { AppError } from "@shared/kernel/errors/app-error.js";
export declare class UserError extends AppError {
}
export declare class NameRequiredError extends UserError {
    constructor();
}
export declare class EmailRequiredError extends UserError {
    constructor();
}
export declare class PasswordHashRequiredError extends UserError {
    constructor();
}
export declare class EmailAlreadyExistsError extends UserError {
    constructor();
}
export declare class InvalidCredentialsError extends UserError {
    constructor();
}
export declare class InvalidUserStatusError extends UserError {
    constructor();
}
export declare class InvalidUserRoleError extends UserError {
    constructor();
}
export declare class InvalidUserPasswordError extends UserError {
    constructor();
}
export declare class UserNotFoundError extends UserError {
    constructor();
}
//# sourceMappingURL=user-errors.d.ts.map