import type { FastifyInstance } from "fastify";
import { requirePermission } from "@shared/presentation/http/auth/permission-guard.js";
import { authGuard } from "@shared/presentation/http/auth/auth-guard.js";
import { makeCreateCategoryController } from "../../factory/make-create-category-controller.js";
import { makeGetCategoryByIdController } from "../../factory/make-get-category-by-id-controller.js";
import { makeUpdateCategoryController } from "../../factory/make-update-category-controller.js";
import { makeListCategoryController } from "../../factory/make-list-category-controller.js";


export function categoryRoutes(app: FastifyInstance){
    const createCategoryController = makeCreateCategoryController()
    const getCategoryByIdController = makeGetCategoryByIdController()
    const updateCategoryController = makeUpdateCategoryController()
    const listCategoryController = makeListCategoryController()

    app.register(async (protectedRoutes) => {
      protectedRoutes.addHook("preHandler", authGuard)
    
      protectedRoutes.post("/categories", { preHandler:  requirePermission("CATEGORY_CREATE")}, createCategoryController.handle.bind(createCategoryController))
      protectedRoutes.put("/categories/:id", { preHandler:  requirePermission("CATEGORY_UPDATE")}, updateCategoryController.handle.bind(updateCategoryController))
    })
    app.get("/categories", listCategoryController.handle.bind(listCategoryController))
    app.get("/categories/:id", getCategoryByIdController.handle.bind(getCategoryByIdController))
} 