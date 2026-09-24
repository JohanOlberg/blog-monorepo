import { GetPostBySlugController } from "../http/controllers/GetPostBySlugController.js"
import { GetPostBySlugUseCase } from "../../application/use-cases/get-post-by-slug-use-case.js";
import { PrismaPostRepository } from "../../infrastructure/persistence/prisma/repositories/prisma-post-repository.js";

export function makeGetPostBySlugController() {
  const postRepository = new PrismaPostRepository();
  const getPostBySlugUseCase = new GetPostBySlugUseCase(postRepository);
  const getPostBySlugController = new GetPostBySlugController(getPostBySlugUseCase);

  return getPostBySlugController;
}