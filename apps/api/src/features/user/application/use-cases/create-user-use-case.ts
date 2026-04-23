import { type CreateUserInput } from "@user/application/dto/user.input.js";
import { NewUser } from "@user/domain/entities/user.js";
import { type IUserRepository } from "@user/domain/repositories/IUserRepository.js";
import { toUserOutput } from "../mappers/user-output-mapper.js";
import type { IPasswordHasher } from "@user/application/contracts/IPasswordHasher.js";



export class CreateUserUseCase{
    constructor(private readonly userRepository:IUserRepository, private passwordHasher:IPasswordHasher){}

    async  execute(input:CreateUserInput) {
        const existingUser = await this.userRepository.findByEmail(input.email)
        if(existingUser){
            throw new Error()
        }
        const hashedPassword = await this.passwordHasher.hash(input.password)
        const { password, ...rest } = input 
        const newUser = NewUser.create({...rest, passwordHash: hashedPassword})
        
        const user = await this.userRepository.save(newUser)
        return toUserOutput(user) 
    }
}