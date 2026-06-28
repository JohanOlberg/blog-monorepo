import { UpdateAuthorUserUseCase } from "../../application/use-cases/update-author-use-case.js";
import { PrismaAuthorRepository } from "../../infrastructure/persistence/prisma/repositories/prisma-author-repository.js"
import { UpdateAuthorController } from "../http/controllers/UpdateAuthorController.js";

export function makeUpdateAuthorController() {
  const prismaAuthorRepository = new PrismaAuthorRepository();
  const updateAuthorUseCase = new UpdateAuthorUserUseCase(prismaAuthorRepository);
  const updateAuthorController = new UpdateAuthorController(updateAuthorUseCase);

  return updateAuthorController;
}