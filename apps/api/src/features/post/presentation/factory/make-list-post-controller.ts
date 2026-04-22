import { ListPostsController } from "../http/controllers/LIstPostsController.js";
import { ListPostsUseCase } from "../../application/use-cases/list-posts-use-case.js";
import { PrismaPostRepository } from "../../infrastructure/persistence/prisma/repositories/prisma-post-repository.js";

export function makeListPostsController() {
  const postRepository = new PrismaPostRepository();
  const listPostUseCase = new ListPostsUseCase(postRepository);
  const ListPostsController = new ListPostsController(listPostUseCase);

  return ListPostsController;
}