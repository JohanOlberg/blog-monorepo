import { GetAuthorByIdUseCase } from "../../application/use-cases/get-author-by-id-use-case.js";
import { PrismaAuthorRepository } from "../../infrastructure/persistence/prisma/repositories/prisma-author-repository.js";
import { GetAuthorByIdController } from "../http/controllers/GetAuthorByIdController.js";

export function makeGetAuthorByIdController() {
  const prismaAuthorRepository = new PrismaAuthorRepository();
  const getAuthorByIdUseCase = new GetAuthorByIdUseCase(prismaAuthorRepository);
  const getAuthorByIdController = new GetAuthorByIdController(getAuthorByIdUseCase);

  return getAuthorByIdController;
}