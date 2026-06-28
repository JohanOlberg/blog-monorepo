import { PrismaUserRepository } from "@user/infrastructure/persistence/prisma/repositories/prisma-user-repository.js";
import { CreateAuthorUseCase } from "../../application/use-cases/create-author-use-case.js";
import { PrismaAuthorRepository } from "../../infrastructure/persistence/prisma/repositories/prisma-author-repository.js";
import { CreateAuthorController } from "../http/controllers/CreateAuthorController.js";

export function makeCreateAuthorController() {
  const prismaAuthorRepository = new PrismaAuthorRepository();
  const prismaUserRepository = new PrismaUserRepository();
  const createAuthorUseCase = new CreateAuthorUseCase(prismaAuthorRepository, prismaUserRepository);
  const createAuthorController = new CreateAuthorController(createAuthorUseCase);

  return createAuthorController;
}