import { GetPostByIdController } from "../http/controllers/GetPostByIdController.js"
import { GetPostByIdUseCase } from "@post/application/use-cases/get-post-by-id-use-case.js";
import { PrismaPostRepository } from "../../infrastructure/persistence/prisma/repositories/prisma-post-repository.js";

export function makeGetPostByIdController() {
  const postRepository = new PrismaPostRepository();
  const getPostByIdUseCase = new GetPostByIdUseCase(postRepository);
  const postByIdController = new GetPostByIdController(getPostByIdUseCase);

  return postByIdController;
}