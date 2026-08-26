import { Prisma } from "@prisma/client";
import { NewUser, User } from "@user/domain/entities/user.js";
type PrismaUser = Prisma.UserGetPayload<{
    include: {
        authors: true;
    };
}>;
export declare function toPrismaCreate(user: NewUser): {
    name: string;
    email: string;
    passwordHash: string;
    status: import("../../../../domain/types/user-status.js").UserStatus;
    role: import("../../../../domain/types/user-roles.js").UserRoles;
};
export declare function toPrismaUpdate(user: User): {
    name: string;
    email: string;
    status: import("../../../../domain/types/user-status.js").UserStatus;
    updatedAt: Date;
    passwordHash: string;
    role: import("../../../../domain/types/user-roles.js").UserRoles;
    passwordChangedAt: Date | null;
};
export declare function toDomain(prisma: PrismaUser): User;
export {};
//# sourceMappingURL=prisma-user-mappers.d.ts.map