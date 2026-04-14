import { ListPostController } from "../http/controllers/LIstPostsController.js";
import { PostsListUseCase } from "../../application/use-cases/list-posts-use-case.js";
import { PrismaPostRepository } from "../../infrastructure/persistence/prisma/repositories/prisma-post-repository.js";

export function makeListPostController() {
  const postRepository = new PrismaPostRepository();
  const listPostUseCase = new PostsListUseCase(postRepository);
  const listPostController = new ListPostController(listPostUseCase);

  return listPostController;
}