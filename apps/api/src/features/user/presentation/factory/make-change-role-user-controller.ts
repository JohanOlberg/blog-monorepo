import { ChangeUserRoleUseCase } from "../../application/use-cases/change-role-user-use-case.js";
import { PrismaUserRepository } from "../../infrastructure/persistence/prisma/repositories/prisma-user-repository.js";
import { ChangeUserRoleController } from "../http/controllers/ChangeRoleUserController.js";

export function makeChangeUserRoleController(){
const prismaUserRepository = new PrismaUserRepository()
const changeUserRoleUseCase = new ChangeUserRoleUseCase(prismaUserRepository)
const changeUserRoleController = new ChangeUserRoleController(changeUserRoleUseCase)
return  changeUserRoleController

}