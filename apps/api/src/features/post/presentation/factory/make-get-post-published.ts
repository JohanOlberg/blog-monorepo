import { GetPostPublishedController } from "../http/controllers/GetPostPublished.js";
import { GetPostPublishedUseCase } from "../../application/use-cases/get-post-published-use-case.js";
import { PrismaPostRepository } from "../../infrastructure/persistence/prisma/repositories/prisma-post-repository.js";

export function makeGetPostPublished() {
  const postRepository = new PrismaPostRepository();
  const getPostPublishedUseCase = new GetPostPublishedUseCase(postRepository);
  const getPostPublishedController = new GetPostPublishedController(getPostPublishedUseCase);

  return getPostPublishedController;
}