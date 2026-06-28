import { ChangePostCategoryController } from "../http/controllers/ChangePostCategoryController.js"
import { ChangePostCategoryUseCase } from "../../application/use-cases/change-post-category-use-case.js"
import { PrismaPostRepository } from "../../infrastructure/persistence/prisma/repositories/prisma-post-repository.js"

export function makeChangePostCategoryController() {
  const postRepository = new PrismaPostRepository()
  const useCase = new ChangePostCategoryUseCase(postRepository)
  return new ChangePostCategoryController(useCase)
}