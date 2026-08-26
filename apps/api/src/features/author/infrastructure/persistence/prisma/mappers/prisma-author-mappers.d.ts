import { Prisma } from "@prisma/client";
import { Author, NewAuthor } from "@author/domain/entities/author.js";
import type { AuthorOutput } from "@author/application/dto/author-output.js";
type PrismaAuthor = Prisma.AuthorGetPayload<{}>;
type PrismaAuthorWithUser = Prisma.AuthorGetPayload<{
    include: {
        user: true;
    };
}>;
export declare function toAuthorListOutput(author: PrismaAuthorWithUser): AuthorOutput;
export declare function toPrismaCreate(author: NewAuthor): {
    name: string;
    bio: string | null;
    avatarUrl: string | null;
    userId: number;
    status: import("../../../../domain/types/author-status.js").AuthorStatus;
};
export declare function toPrismaUpdate(author: Author): {
    name: string;
    bio: string | null;
    avatarUrl: string | null;
    userId: number;
    updatedAt: Date;
};
export declare function toDomain(author: PrismaAuthor): Author;
export {};
//# sourceMappingURL=prisma-author-mappers.d.ts.map