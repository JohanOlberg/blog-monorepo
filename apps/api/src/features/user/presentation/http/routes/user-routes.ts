import type { FastifyInstance } from "fastify";
import { makeCreateUserController } from "../../factory/make-create-user-controller.js";
import { makeLoginUserController } from "../../factory/make-login-user-controller.js";
import { authGuard } from "../../../../../shared/presentation/http/auth/auth-guard.js";
import { makeActivateUserController } from "../../factory/make-activate-user-controller.js";
import { makeBlockUserController } from "../../factory/make-block-user-controller.js";
import { makeDeactivateUserController } from "../../factory/make-deactivate-user-controller.js";
import { makeGetByEmailUserController } from "../../factory/make-get-by-email-user-controller.js";
import { makeUpdateUserController } from "../../factory/make-update-user-controller.js";
import { makeListUserController } from "../../factory/make-list-user-controller.js";
import { makeChangePasswordUserController } from "../../factory/make-change-password-user-controller.js";
import { makeChangeUserRoleController } from "../../factory/make-change-role-user-controller.js";
import { requirePermission } from "../../../../../shared/presentation/http/auth/permission-guard.js";
import { listUserRolesController } from "../controllers/ListUserRolesController.js";


export async function userRoutes(app: FastifyInstance){
    const createUserController = makeCreateUserController()
    const loginUserController = makeLoginUserController()
    const activateUserController  = makeActivateUserController()
    const blockUserController = makeBlockUserController()
    const deactivateUserController = makeDeactivateUserController()
    const getByEmailUserController = makeGetByEmailUserController()
    const updateUserController = makeUpdateUserController()
    const listUserController = makeListUserController()
    const changePasswordUserController = makeChangePasswordUserController()
    const changeUserRoleController = makeChangeUserRoleController()


    
    app.get("/users",  { preHandler: authGuard }, listUserController.handle.bind(listUserController));
    app.get("/users/roles",  { preHandler: authGuard }, listUserRolesController.handle.bind(listUserRolesController));
    app.get("/users/by-email", { preHandler: authGuard }, getByEmailUserController.handle.bind(getByEmailUserController));
    app.post("/login", loginUserController.handle.bind(loginUserController));
    app.post("/users",  { preHandler: [authGuard, requirePermission("USER_CREATE")]}, createUserController.handle.bind(createUserController));
    app.patch("/users/:id/activate",  { preHandler: [authGuard, requirePermission("USER_CHANGE_STATUS")] }, activateUserController.handle.bind(activateUserController));
    app.patch("/users/:id/block",  { preHandler: [authGuard, requirePermission("USER_CHANGE_STATUS")]}, blockUserController.handle.bind(blockUserController));
    app.patch("/users/:id/deactivate",  { preHandler: [authGuard, requirePermission("USER_CHANGE_STATUS")] }, deactivateUserController.handle.bind(deactivateUserController));    
    app.patch("/users/:id/role",  { preHandler: [authGuard, requirePermission("USER_CHANGE_ROLE")]}, changeUserRoleController.handle.bind(changeUserRoleController));
    app.put("/users/:id",  { preHandler: [authGuard, requirePermission("USER_UPDATE")]}, updateUserController.handle.bind(updateUserController));
    app.patch("/users/:id/password",  { preHandler: [authGuard, requirePermission("USER_CHANGE_PASSWORD")]}, changePasswordUserController.handle.bind(changePasswordUserController));
    

}

     