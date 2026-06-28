import type { FastifyInstance } from "fastify";
import { requirePermission } from "@shared/presentation/http/auth/permission-guard.js";
import { authGuard } from "@shared/presentation/http/auth/auth-guard.js";
import { makeCreateAuthorController } from "../../factory/make-create-author-controller.js";
import { makeGetAuthorByIdController } from "../../factory/make-get-author-by-id-controller.js";
import { makeUpdateAuthorController } from "../../factory/make-update-author-controller.js";
import { makeListAuthorController } from "../../factory/make-list-author-controller.js";

export function authorRoutes(app: FastifyInstance) {
  const createAuthorController = makeCreateAuthorController();
  const getAuthorByIdController = makeGetAuthorByIdController();
  const updateAuthorController = makeUpdateAuthorController();
  const listAuthorController = makeListAuthorController();

  app.register(async (protectedRoutes) => {
    protectedRoutes.addHook("preHandler", authGuard);

    protectedRoutes.post(
      "/authors",
      { preHandler: requirePermission("AUTHOR_CREATE") },
      createAuthorController.handle.bind(createAuthorController)
    );

    protectedRoutes.put(
      "/authors/:id",
      { preHandler: requirePermission("AUTHOR_UPDATE") },
      updateAuthorController.handle.bind(updateAuthorController)
    );
  });

  app.get("/authors", listAuthorController.handle.bind(listAuthorController));
  app.get("/authors/:id", getAuthorByIdController.handle.bind(getAuthorByIdController));
}