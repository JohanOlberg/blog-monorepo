import { type CreateUserInput } from "../dto/user.input.js";
import { NewUser } from "../../domain/entities/user.js";
import { type IUserRepository } from "../../domain/repositories/IUserRepository.js";
import { toUserOutput } from "../mappers/user-output-mapper.js";
import type { IPasswordHasher } from "../contracts/IPasswordHasher.js";
import { EmailAlreadyExistsError } from "../../domain/errors/user-errors.js";



export class CreateUserUseCase{
    constructor(private readonly userRepository:IUserRepository, private passwordHasher:IPasswordHasher){}

    async  execute(input:CreateUserInput) {
        const existingUser = await this.userRepository.findByEmail(input.email)
        if(existingUser){
            throw new EmailAlreadyExistsError()
        }
        const hashedPassword = await this.passwordHasher.hash(input.password)
        const { password, ...rest } = input 
        const newUser = NewUser.create({...rest, passwordHash: hashedPassword})
        
        const user = await this.userRepository.save(newUser)
        return toUserOutput(user) 
    }
}