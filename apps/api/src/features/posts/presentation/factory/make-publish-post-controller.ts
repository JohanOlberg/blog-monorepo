import { PublishPostController } from "../http/controllers/PublishPostController.js";
import { PublishPostUseCase } from "../../application/use-cases/publish-post-use-case.js";
import { PrismaPostRepository } from "../../infrastructure/persistence/prisma/repositories/prisma-post-repository.js";

export function makePublishPostController() {
  const postRepository = new PrismaPostRepository();
  const publishPostUseCase = new PublishPostUseCase(postRepository);
  const publishPostController = new PublishPostController(publishPostUseCase);

  return publishPostController;
}