import type { FastifyInstance } from "fastify";
import { makeCreatePostController } from "../../factory/make-create-post-controller.js";
import { makeListPostController } from "../../factory/make-list-post-controller.js";


export async function postRoutes(app: FastifyInstance) {
  const createPostController = makeCreatePostController();
  const listPostController = makeListPostController()

  app.post("/posts", createPostController.handle.bind(createPostController));
  app.get("/posts",listPostController.handle.bind(listPostController))
}