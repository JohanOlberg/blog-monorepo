import { ActivateUserUseCase } from "@user/application/use-cases/active-user-use-case.js";
import { PrismaUserRepository } from "@user/infrastructure/persistence/prisma/repositories/prisma-user-repository.js";
import { ActivateUserController } from "../http/controllers/ActivateUserController.js";

export function makeActivateUserController(){
const prismaUserRepository = new PrismaUserRepository()
const activateUserUseCase = new ActivateUserUseCase(prismaUserRepository)
const createUserController = new ActivateUserController(activateUserUseCase)
return  createUserController

}