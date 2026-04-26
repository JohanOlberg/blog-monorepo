import { type IUserRepository } from "@user/domain/repositories/IUserRepository.js";
import { UserNotFoundError } from "@user/application/errors/user-application-errors.js";
import { toUserOutput } from "../mappers/user-output-mapper.js";

export class BlockUserUseCase{
    constructor(private userRepository: IUserRepository){}

    async execute(id:number){
        const now = new Date()
        const result = await this.userRepository.findById(id)
        if(!result){throw new UserNotFoundError()}
        result.block(now)
        await this.userRepository.update(result)
        return toUserOutput(result)
    }
}