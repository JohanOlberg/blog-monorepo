import type { FastifyInstance } from "fastify";
import { makeCreatePostController } from "../../factory/make-create-post-controller.js";
import { makeListPostsController } from "../../factory/make-list-post-controller.js";
import { makeGetPostByIdController } from "@post/presentation/factory/make-get-post-by-id-controller.js";
import { makeUpdatePostController } from "@post/presentation/factory/make-update-post-controller.js";
import { makeArchivePostController } from "@post/presentation/factory/make-archive-post-controller.js";
import { makePublishPostController } from "@post/presentation/factory/make-publish-post-controller.js";
import { makeDraftPostController } from "@post/presentation/factory/make-draft-post-controller.js";
import { requirePermission } from "@shared/presentation/http/auth/permission-guard.js";
import { authGuard } from "@shared/presentation/http/auth/auth-guard.js";



export async function postsRoutes(app: FastifyInstance) {
  const createPostController = makeCreatePostController();
  const listPostsController = makeListPostsController()
  const getPostByIdController = makeGetPostByIdController()
  const updatePostController = makeUpdatePostController()
  const archivePostController = makeArchivePostController()
  const publishPostController = makePublishPostController()
  const draftPostController = makeDraftPostController()

app.register(async (protectedRoutes) => {
  protectedRoutes.addHook("preHandler", authGuard)

  protectedRoutes.post("/posts", { preHandler:  requirePermission("POST_CREATE")}, createPostController.handle.bind(createPostController))
  protectedRoutes.put("/posts/:id", { preHandler:  requirePermission("POST_UPDATE")}, updatePostController.handle.bind(updatePostController))
  protectedRoutes.patch("/posts/:id/archive", { preHandler:  requirePermission("POST_ARCHIVE")}, archivePostController.handle.bind(archivePostController))
  protectedRoutes.patch("/posts/:id/draft", { preHandler:  requirePermission("POST_DRAFT")}, draftPostController.handle.bind(draftPostController))
  protectedRoutes.patch("/posts/:id/publish", { preHandler: requirePermission("POST_PUBLISH")},  publishPostController.handle.bind(publishPostController))
})
app.get("/posts", listPostsController.handle.bind(listPostsController))
app.get("/posts/:id", getPostByIdController.handle.bind(getPostByIdController))
}