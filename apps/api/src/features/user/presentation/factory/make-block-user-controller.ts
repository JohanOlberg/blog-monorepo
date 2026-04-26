import { PrismaUserRepository } from "@user/infrastructure/persistence/prisma/repositories/prisma-user-repository.js";
import { BlockUserController } from "../http/controllers/BlockUserController.js";
import { BlockUserUseCase } from "@user/application/use-cases/block-user-use-case.js";

export function makeBlockUserController(){
const prismaUserRepository = new PrismaUserRepository()
const blockUserUseCase = new BlockUserUseCase(prismaUserRepository)
const blockUserController = new BlockUserController(blockUserUseCase)
return  blockUserController

}