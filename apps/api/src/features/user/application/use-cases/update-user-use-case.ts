import { type IUserRepository } from "@user/domain/repositories/IUserRepository.js";
import { UserNotFoundError } from "@user/application/errors/user-application-errors.js";
import { toUserOutput } from "../mappers/user-output-mapper.js";
import { type UpdateUserInput } from "../dto/user.input.js";

export class UpdateUserUseCase{
    constructor(private userRepository:IUserRepository){}
    async execute(input:UpdateUserInput,id:number){
        const now = new Date()
        const result =  await this.userRepository.findById(id)
        if(!result){throw new UserNotFoundError()}
        result.update(now,input)
        await this.userRepository.update(result)
        return toUserOutput(result)
    }
}