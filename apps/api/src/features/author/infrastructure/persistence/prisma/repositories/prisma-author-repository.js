import { prisma } from "@shared/infrastructure/database/prisma/prisma-client.js";
import { Author, NewAuthor } from "@author/domain/entities/author.js";
import {} from "@author/domain/repository/IAuthorRepository.js";
import { toDomain, toPrismaCreate, toPrismaUpdate, toAuthorListOutput, } from "../mappers/prisma-author-mappers.js";
export class PrismaAuthorRepository {
    async save(author) {
        const result = await prisma.author.create({
            data: toPrismaCreate(author),
        });
        return toDomain(result);
    }
    async update(author) {
        const props = author.getProps();
        await prisma.author.update({
            where: {
                id: props.id,
            },
            data: toPrismaUpdate(author),
        });
    }
    async findById(id) {
        const result = await prisma.author.findUnique({
            where: { id },
        });
        if (!result)
            return null;
        return toDomain(result);
    }
    async findByName(name) {
        const result = await prisma.author.findMany({
            where: {
                name: {
                    contains: name,
                    mode: "insensitive",
                },
            },
        });
        return result.map(toDomain);
    }
    async findAll() {
        const result = await prisma.author.findMany({
            include: {
                user: true,
            },
        });
        return result.map(toAuthorListOutput);
    }
}
//# sourceMappingURL=prisma-author-repository.js.map