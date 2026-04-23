import type { FastifyInstance } from "fastify";
import { makeCreateUserController } from "@user/presentation/factory/make-create-user-controller.js";


export async function userRoutes(app: FastifyInstance){
    const createUserController = makeCreateUserController()

     app.post("/user", createUserController.handle.bind(createUserController));
}

