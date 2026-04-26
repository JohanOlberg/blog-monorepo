import { LoginUserUseCase } from "@user/application/use-cases/login-user-use-case.js";
import { PrismaUserRepository } from "@user/infrastructure/persistence/prisma/repositories/prisma-user-repository.js";
import { Argon2PasswordHasher } from "@shared/infrastructure/security/argon2-password-hasher.js";
import { JwtTokenService } from "@shared/infrastructure/security/jwt-token-service.js";
import { LoginUserController } from "../http/controllers/LoginUserController.js";

const SECRET_KEY = process.env.JWT_SECRET as string;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN as string;

export function makeLoginUserController(){
const argon2PasswordHasher = new Argon2PasswordHasher()
const prismaUserRepository = new PrismaUserRepository()
const tokenService = new JwtTokenService(SECRET_KEY, JWT_EXPIRES_IN)
const loginUserUseCase = new LoginUserUseCase(prismaUserRepository, argon2PasswordHasher, tokenService)
return new LoginUserController(loginUserUseCase)


}