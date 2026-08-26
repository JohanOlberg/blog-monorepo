import { type AuthorStatus } from "../types/author-status.js";
interface AuthorCreateProps {
    name: string;
    bio: string | null;
    avatarUrl: string | null;
    userId: number;
    status: AuthorStatus;
}
interface AuthorCreateInput {
    name: string;
    bio: string | null;
    avatarUrl: string | null;
    userId: number;
}
export declare class NewAuthor {
    private readonly props;
    private constructor();
    getProps(): AuthorCreateProps;
    static create(input: AuthorCreateInput): NewAuthor;
}
interface AuthorProps {
    id: number;
    name: string;
    bio: string | null;
    avatarUrl: string | null;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    status: AuthorStatus;
}
interface AuthorPropsUpdate {
    name: string;
    bio: string | null;
    avatarUrl: string | null;
}
export declare class Author {
    private readonly props;
    private constructor();
    getProps(): AuthorProps;
    static restore(author: AuthorProps): Author;
    update(now: Date, props: AuthorPropsUpdate): void;
    activate(now: Date): void;
    deactivate(now: Date): void;
    changeUser(now: Date, userId: number): void;
}
export {};
//# sourceMappingURL=author.d.ts.map