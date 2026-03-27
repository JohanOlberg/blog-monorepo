import { CreatePostController } from "../http/controllers/CreatePostController.js";
import { CreatePostUseCase } from "../../application/use-cases/create-post-use-case.js";
import { PrismaPostRepository } from "../../infrastructure/persistence/prisma/repositories/prisma-post-repository.js";

export function makeCreatePostController() {
  const postRepository = new PrismaPostRepository();
  const createPostUseCase = new CreatePostUseCase(postRepository);
  const createPostController = new CreatePostController(createPostUseCase);

  return createPostController;
}