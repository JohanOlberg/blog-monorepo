import type { FastifyInstance } from "fastify";
import { makeLoginUserController } from "@user/presentation/factory/make-login-user-controller.js";


export async function authRoutes(app: FastifyInstance){
    const loginUserController = makeLoginUserController()

     app.post("/login", loginUserController.handle.bind(loginUserController));
}

