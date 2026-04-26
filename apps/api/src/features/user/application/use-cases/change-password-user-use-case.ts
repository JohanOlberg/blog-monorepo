import { type ChangeUserPasswordInput } from "@user/application/dto/user.input.js";
import { type IUserRepository } from "@user/domain/repositories/IUserRepository.js";
import { toUserOutput } from "../mappers/user-output-mapper.js";
import type { IPasswordHasher } from "@user/application/contracts/IPasswordHasher.js";
import { UserNotFoundError } from "../errors/user-application-errors.js";



export class ChangePasswordUserUseCase{
    constructor(private readonly userRepository:IUserRepository, private passwordHasher:IPasswordHasher){}

    async  execute(input:ChangeUserPasswordInput) {
        const now = new Date()
        const result = await this.userRepository.findById(input.id)        
        if(!result){throw new UserNotFoundError()}
        
        const hashedPassword = await this.passwordHasher.hash(input.password)
        result.changePassword(now,hashedPassword)
        await this.userRepository.update(result)
        return toUserOutput(result) 
    }
}