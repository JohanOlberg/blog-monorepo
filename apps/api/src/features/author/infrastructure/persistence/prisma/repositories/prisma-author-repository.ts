import { prisma } from "@shared/infrastructure/database/prisma/prisma-client.js";
import { Author, NewAuthor } from "@author/domain/entities/author.js";
import { type IAuthorRepository } from "@author/domain/repository/IAuthorRepository.js";
import {
  toDomain,
  toPrismaCreate,
  toPrismaUpdate,
  toAuthorListOutput,
} from "../mappers/prisma-author-mappers.js";
import type { AuthorOutput } from "@author/application/dto/author-output.js";

export class PrismaAuthorRepository implements IAuthorRepository {

  async save(author: NewAuthor): Promise<Author> {
    const result = await prisma.author.create({
      data: toPrismaCreate(author),
    });

    return toDomain(result);
  }

  async update(author: Author): Promise<void> {
    const props = author.getProps();

    await prisma.author.update({
      where: {
        id: props.id,
      },
      data: toPrismaUpdate(author),
    });
  }

  async findById(id: number): Promise<Author | null> {
    const result = await prisma.author.findUnique({
      where: { id },
    });

    if (!result) return null;

    return toDomain(result);
  }

  async findByName(name: string): Promise<Author[]> {
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

  async findAll(): Promise<AuthorOutput []> {
    const result = await prisma.author.findMany({
  include: {
    user: true,
  },
});

    return result.map(toAuthorListOutput);
  }
}