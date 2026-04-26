import { PrismaUserRepository } from "@user/infrastructure/persistence/prisma/repositories/prisma-user-repository.js";
import { UpdateUserUseCase } from "@user/application/use-cases/update-user-use-case.js";
import { UpdateUserController } from "../http/controllers/UpdateUserController.js";

export function makeUpdateUserController(){
const prismaUserRepository = new PrismaUserRepository()
const updateUserUseCase = new UpdateUserUseCase(prismaUserRepository)
const updateUserController = new UpdateUserController(updateUserUseCase)
return  updateUserController

}