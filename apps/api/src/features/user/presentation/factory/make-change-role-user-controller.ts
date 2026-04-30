import { ChangeUserRoleUseCase } from "@user/application/use-cases/change-role-user-use-case.js";
import { PrismaUserRepository } from "@user/infrastructure/persistence/prisma/repositories/prisma-user-repository.js";
import { ChangeUserRoleController } from "../http/controllers/ChangeRoleUserController.js";

export function makeChangeUserRoleController(){
const prismaUserRepository = new PrismaUserRepository()
const changeUserRoleUseCase = new ChangeUserRoleUseCase(prismaUserRepository)
const changeUserRoleController = new ChangeUserRoleController(changeUserRoleUseCase)
return  changeUserRoleController

}