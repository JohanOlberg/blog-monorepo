import type { FastifyInstance } from "fastify";
import { makeCreateUserController } from "@user/presentation/factory/make-create-user-controller.js";
import { makeLoginUserController } from "@user/presentation/factory/make-login-user-controller.js";

import { authGuard } from "@shared/presentation/http/auth/auth-guard.js";

export async function userRoutes(app: FastifyInstance){
    const createUserController = makeCreateUserController()
    const loginUserController = makeLoginUserController()

     app.post("/login", loginUserController.handle.bind(loginUserController));

     app.post("/user",  { preHandler: authGuard }, createUserController.handle.bind(createUserController));
}

