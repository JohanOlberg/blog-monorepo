import { type UserStatus } from "@user/domain/types/user-status.js";
import { type UserRoles } from "@user/domain/types/user-roles.js";
interface NewUserProps {
    name: string;
    email: string;
    passwordHash: string;
    status: UserStatus;
    role: UserRoles;
}
interface NewUserInput {
    name: string;
    email: string;
    passwordHash: string;
}
export declare class NewUser {
    private readonly props;
    private constructor();
    getProps(): NewUserProps;
    static create(newUser: NewUserInput): NewUser;
}
interface UserProps {
    id: number;
    name: string;
    email: string;
    passwordHash: string;
    updatedAt: Date;
    createdAt: Date;
    passwordChangedAt: Date | null;
    authorIds: number[];
    status: UserStatus;
    role: UserRoles;
}
interface UserPropsUpdate {
    name: string;
    email: string;
}
export declare class User {
    private readonly props;
    private constructor();
    getProps(): UserProps;
    update(now: Date, data: UserPropsUpdate): void;
    activate(now: Date): void;
    deactivate(now: Date): void;
    block(now: Date): void;
    changeRole(now: Date, newRole: UserRoles, id: number): void;
    changePassword(now: Date, passwordHash: string): void;
    changeAuthors(now: Date): void;
    static restore(user: UserProps): User;
}
export {};
//# sourceMappingURL=user.d.ts.map