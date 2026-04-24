import type { FastifyInstance } from "fastify";
import { makeCreateUserController } from "@user/presentation/factory/make-create-user-controller.js";
import { makeLoginUserController } from "@user/presentation/factory/make-login-user-controller.js";

export async function userRoutes(app: FastifyInstance){
    const createUserController = makeCreateUserController()
    const loginUserController = makeLoginUserController()

     app.post("/login", loginUserController.handle.bind(loginUserController));

     app.post("/user", createUserController.handle.bind(createUserController));
}

