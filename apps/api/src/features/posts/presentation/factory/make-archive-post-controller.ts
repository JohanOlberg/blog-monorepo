import { ArchivePostController } from "../http/controllers/ArchivePostController.js";
import { ArchivePostUseCase } from "../../application/use-cases/archive-post-use-case.js";
import { PrismaPostRepository } from "../../infrastructure/persistence/prisma/repositories/prisma-post-repository.js";

export function makeArchivePostController() {
  const postRepository = new PrismaPostRepository();
  const archivePostUseCase = new ArchivePostUseCase(postRepository);
  const archivePostController = new ArchivePostController(archivePostUseCase);

  return archivePostController;
}