import { PrismaUserRepository } from "@user/infrastructure/persistence/prisma/repositories/prisma-user-repository.js";
import { DeactivateUserUseCase } from "@user/application/use-cases/deactivate-user-use-case.js";
import { DeactivateUserController } from "../http/controllers/DeactivateUserController.js";

export function makeDeactivateUserController(){
const prismaUserRepository = new PrismaUserRepository()
const deactivateUserUseCase = new DeactivateUserUseCase(prismaUserRepository)
const deactivaUserController = new DeactivateUserController(deactivateUserUseCase)
return  deactivaUserController

}