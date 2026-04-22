import type { FastifyInstance } from "fastify";
import { makeCreatePostController } from "../../factory/make-create-post-controller.js";
import { makeListPostController } from "../../factory/make-list-post-controller.js";
import { makeGetPostByIdController } from "src/features/post/presentation/factory/make-get-post-by-id-controller.js";
import { makeUpdatePostController } from "src/features/post/presentation/factory/make-update-post-controller.js";
import { makeArchivePostController } from "src/features/post/presentation/factory/make-archive-post-controller.js";
import { makePublishPostController } from "src/features/post/presentation/factory/make-publish-post-controller.js";
import { makeDraftPostController } from "src/features/post/presentation/factory/make-draft-post-controller.js";





export async function postsRoutes(app: FastifyInstance) {
  const createPostController = makeCreatePostController();
  const listPostController = makeListPostController()
  const getPostByIdController = makeGetPostByIdController()
  const updatePostController = makeUpdatePostController()
  const archivePostController = makeArchivePostController()
  const publishPostController = makePublishPostController()
  const draftPostController = makeDraftPostController()

  app.post("/posts", createPostController.handle.bind(createPostController));
  app.get("/posts", listPostController.handle.bind(listPostController))
  app.get("/posts/:id", getPostByIdController.handle.bind(getPostByIdController))
  app.put("/posts/:id", updatePostController.handle.bind(updatePostController))

  app.patch("/posts/:id/archive", archivePostController.handle.bind(archivePostController))
  app.patch("/posts/:id/draft", draftPostController.handle.bind(draftPostController))
  app.patch("/posts/:id/publish", publishPostController.handle.bind(publishPostController))
}