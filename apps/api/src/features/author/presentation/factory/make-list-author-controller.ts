import { ListAuthorController } from "../http/controllers/ListAuthorController.js";
import { GetAllAuthorsUseCase } from "../../application/use-cases/list-author-use-case.js";
import { PrismaAuthorRepository } from "../../infrastructure/persistence/prisma/repositories/prisma-author-repository.js";

export function makeListAuthorController() {
  const prismaAuthorRepository = new PrismaAuthorRepository();
  const listAuthorUseCase = new GetAllAuthorsUseCase(prismaAuthorRepository);
  const listAuthorController = new ListAuthorController(listAuthorUseCase);

  return listAuthorController;
}