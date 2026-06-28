import { ChangePostAuthorController } from "../http/controllers/ChangePostAuthorController.js"
import { ChangePostAuthorUseCase } from "../../application/use-cases/change-post-author-use-case.js"
import { PrismaPostRepository } from "../../infrastructure/persistence/prisma/repositories/prisma-post-repository.js"

export function makeChangePostAuthorController() {
  const postRepository = new PrismaPostRepository()
  const useCase = new ChangePostAuthorUseCase(postRepository)
  return new ChangePostAuthorController(useCase)
}