import { Author } from "@author/domain/entities/author.js";
export declare function toAuthorOutput(author: Author): {
    name: string;
    id: number;
    bio: string | null;
    avatarUrl: string | null;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    status: import("../../domain/types/author-status.js").AuthorStatus;
};
//# sourceMappingURL=author-output-mappers.d.ts.map