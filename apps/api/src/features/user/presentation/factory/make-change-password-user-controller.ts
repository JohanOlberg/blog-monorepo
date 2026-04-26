import { PrismaUserRepository } from "@user/infrastructure/persistence/prisma/repositories/prisma-user-repository.js";
import { ChangePasswordUserUseCase } from "@user/application/use-cases/change-password-user-use-case.js";
import { ChangePasswordUserController } from "../http/controllers/ChangePasswordUserController.js";
import { Argon2PasswordHasher } from "@shared/infrastructure/security/argon2-password-hasher.js";

export function makeChangePasswordUserController(){
const argon2PasswordHasher = new Argon2PasswordHasher()
const prismaUserRepository = new PrismaUserRepository()
const changePasswordUserUseCase = new ChangePasswordUserUseCase(prismaUserRepository,argon2PasswordHasher)
const changePasswordUserController = new ChangePasswordUserController(changePasswordUserUseCase)
return  changePasswordUserController

}