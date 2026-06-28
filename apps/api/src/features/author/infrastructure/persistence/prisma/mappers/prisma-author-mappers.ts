import { Prisma } from "@prisma/client";
import { Author, NewAuthor } from "@author/domain/entities/author.js";
import type { AuthorOutput } from "@author/application/dto/author-output.js";

type PrismaAuthor = Prisma.AuthorGetPayload<{}>;

type PrismaAuthorWithUser = Prisma.AuthorGetPayload<{
  include: {
    user: true;
  };
}>;

export function toAuthorListOutput(author: PrismaAuthorWithUser): AuthorOutput {
  return {
    id: author.id,
    name: author.name,
    bio: author.bio,
    avatarUrl: author.avatarUrl,
    userId: author.userId,
    status: author.status,
    email: author.user.email,
    createdAt: author.createdAt,
    updatedAt: author.updatedAt,
  };
}

export function toPrismaCreate(author: NewAuthor) {
  const props = author.getProps();

  return {
    name: props.name,
    //email: props.email,
    bio: props.bio,
    avatarUrl: props.avatarUrl,
    userId: props.userId,
    status: props.status,
  };
}

export function toPrismaUpdate(author: Author) {
  const props = author.getProps();

  return {
    name: props.name,
    //email: props.email,
    bio: props.bio,
    avatarUrl: props.avatarUrl,
    userId: props.userId,
    //status: props.status,
    updatedAt: props.updatedAt,
  };
}

export function toDomain(author: PrismaAuthor): Author {
  return Author.restore({
    id: author.id,
    name: author.name,
    bio: author.bio,
    avatarUrl: author.avatarUrl,
    userId: author.userId,
    status: author.status,
    createdAt: author.createdAt,
    updatedAt: author.updatedAt,
  });
}