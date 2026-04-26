import { PrismaUserRepository } from "@user/infrastructure/persistence/prisma/repositories/prisma-user-repository.js";
import { ListUserController } from "../http/controllers/ListUserController.js";
import { ListUserUseCase } from "@user/application/use-cases/list-user-use-case.js";

export function makeListUserController(){
const prismaUserRepository = new PrismaUserRepository()
const listUserUseCase = new ListUserUseCase(prismaUserRepository)
const listUserController = new ListUserController(listUserUseCase)
return  listUserController

}