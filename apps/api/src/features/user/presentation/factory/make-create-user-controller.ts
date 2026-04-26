import { CreateUserUseCase } from "@user/application/use-cases/create-user-use-case.js";
import { PrismaUserRepository } from "@user/infrastructure/persistence/prisma/repositories/prisma-user-repository.js";
import { Argon2PasswordHasher } from "@shared/infrastructure/security/argon2-password-hasher.js";
import { CreateUserController } from "../http/controllers/CreateUserController.js";

export function makeCreateUserController(){
const argon2PasswordHasher = new Argon2PasswordHasher()
const prismaUserRepository = new PrismaUserRepository()
const createUserUseCase = new CreateUserUseCase(prismaUserRepository, argon2PasswordHasher)
const createUserController = new CreateUserController(createUserUseCase)
return  createUserController

}