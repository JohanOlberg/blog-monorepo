import type { FastifyInstance } from "fastify";
import { makeCreateUserController } from "@user/presentation/factory/make-create-user-controller.js";
import { makeLoginUserController } from "@user/presentation/factory/make-login-user-controller.js";
import { authGuard } from "@shared/presentation/http/auth/auth-guard.js";
import { makeActivateUserController } from "@user/presentation/factory/make-activate-user-controller.js";
import { makeBlockUserController } from "@user/presentation/factory/make-block-user-controller.js";
import { makeDeactivateUserController } from "@user/presentation/factory/make-deactivate-user-controller.js";
import { makeGetByEmailUserController } from "@user/presentation/factory/make-get-by-email-user-controller.js";
import { makeUpdateUserController } from "@user/presentation/factory/make-update-user-controller.js";
import { makeListUserController } from "@user/presentation/factory/make-list-user-controller.js";
import { makeChangePasswordUserController } from "@user/presentation/factory/make-change-password-user-controller.js";


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

    app.post("/login", loginUserController.handle.bind(loginUserController));
    app.post("/users",  { preHandler: authGuard }, createUserController.handle.bind(createUserController));
    app.patch("/users/:id/activate",  { preHandler: authGuard }, activateUserController.handle.bind(activateUserController));
    app.patch("/users/:id/block",  { preHandler: authGuard }, blockUserController.handle.bind(blockUserController));
    app.patch("/users/:id/deactivate",  { preHandler: authGuard }, deactivateUserController.handle.bind(deactivateUserController));
    app.put("/users/:id",  { preHandler: authGuard }, updateUserController.handle.bind(updateUserController));
    app.patch("/users/:id/password",  { preHandler: authGuard }, changePasswordUserController.handle.bind(changePasswordUserController));
    app.get("/users",  { preHandler: authGuard }, listUserController.handle.bind(listUserController));
    app.get("/users/by-email?email=", { preHandler: authGuard }, getByEmailUserController.handle.bind(getByEmailUserController));

}

     