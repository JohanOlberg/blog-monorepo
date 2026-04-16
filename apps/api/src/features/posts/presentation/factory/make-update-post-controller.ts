import { UpdatePostController } from "../http/controllers/UpdatePostController.js";
import { UpdatePostUseCase } from "../../application/use-cases/update-post-use-case.js";
import { PrismaPostRepository } from "../../infrastructure/persistence/prisma/repositories/prisma-post-repository.js";

export function makeUpdatePostController() {
  const postRepository = new PrismaPostRepository();
  const updatePostUseCase = new UpdatePostUseCase(postRepository);
  const updatePostController = new UpdatePostController(updatePostUseCase);

  return updatePostController;
}