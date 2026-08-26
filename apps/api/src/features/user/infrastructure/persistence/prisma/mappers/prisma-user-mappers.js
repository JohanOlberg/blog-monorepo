import { Prisma } from "@prisma/client";
import { NewUser, User } from "@user/domain/entities/user.js";
export function toPrismaCreate(user) {
    const props = user.getProps();
    return ({
        name: props.name,
        email: props.email,
        passwordHash: props.passwordHash,
        status: props.status,
        role: props.role
    });
}
export function toPrismaUpdate(user) {
    const props = user.getProps();
    return {
        name: props.name,
        email: props.email,
        status: props.status,
        updatedAt: props.updatedAt,
        passwordHash: props.passwordHash,
        role: props.role,
        passwordChangedAt: props.passwordChangedAt,
    };
}
export function toDomain(prisma) {
    return User.restore({
        id: prisma.id,
        name: prisma.name,
        email: prisma.email,
        passwordHash: prisma.passwordHash,
        updatedAt: prisma.updatedAt,
        createdAt: prisma.createdAt,
        passwordChangedAt: prisma.passwordChangedAt,
        authorIds: prisma.authors?.map(a => a.id) ?? [],
        status: prisma.status,
        role: prisma.role
    });
}
//# sourceMappingURL=prisma-user-mappers.js.map