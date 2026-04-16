import { DraftPostController } from "../http/controllers/DraftPostController.js";
import { DraftPostUseCase } from "../../application/use-cases/draft-post-use-case.js";
import { PrismaPostRepository } from "../../infrastructure/persistence/prisma/repositories/prisma-post-repository.js";

export function makeDraftPostController() {
  const postRepository = new PrismaPostRepository();
  const draftPostUseCase = new DraftPostUseCase(postRepository);
  const draftPostController = new DraftPostController(draftPostUseCase);

  return draftPostController;
}