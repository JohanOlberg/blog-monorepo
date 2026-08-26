import { prisma } from "@shared/infrastructure/database/prisma/prisma-client.js";
import {} from "@user/domain/repositories/IUserRepository.js";
import { toDomain, toPrismaCreate, toPrismaUpdate } from "../mappers/prisma-user-mappers.js";
export class PrismaUserRepository {
    async existsById(id) {
        const result = await prisma.user.findUnique({
            where: {
                id: id
            },
            include: { authors: true }
        });
        if (!result) {
            return false;
        }
        return true;
    }
    async findById(id) {
        const result = await prisma.user.findUnique({
            where: {
                id: id
            },
            include: { authors: true }
        });
        if (!result) {
            return null;
        }
        return toDomain(result);
    }
    async update(user) {
        const props = user.getProps();
        if (props.id === undefined) {
            throw new Error("User not found");
        }
        await prisma.user.update({
            where: { id: props.id },
            data: toPrismaUpdate(user)
        });
    }
    async findAll() {
        const users = await prisma.user.findMany({ include: { authors: true } });
        return users.map(toDomain);
    }
    async save(newUser) {
        const user = await prisma.user.create({ data: toPrismaCreate(newUser), include: { authors: true } });
        return toDomain(user);
    }
    async findByEmail(email) {
        const result = await prisma.user.findUnique({
            where: {
                email: email
            },
            include: { authors: true }
        });
        if (!result) {
            return null;
        }
        return toDomain(result);
    }
}
//# sourceMappingURL=prisma-user-repository.js.map