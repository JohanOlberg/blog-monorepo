import { PrismaUserRepository } from "@user/infrastructure/persistence/prisma/repositories/prisma-user-repository.js";
import { GetByEmailUserController } from "../http/controllers/GetByEmailUserController.js";
import { GetByEmailUseCase } from "@user/application/use-cases/get-by-email-user-use-case.js";

export function makeGetByEmailUserController(){
const prismaUserRepository = new PrismaUserRepository()
const getByEmailUserUseCase = new GetByEmailUseCase(prismaUserRepository)
const getByEmailUserController = new GetByEmailUserController(getByEmailUserUseCase)
return  getByEmailUserController

}