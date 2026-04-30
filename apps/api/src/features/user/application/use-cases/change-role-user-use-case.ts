import { type IUserRepository } from "@user/domain/repositories/IUserRepository.js";
import { UserNotFoundError } from "@user/application/errors/user-application-errors.js";
import { toUserOutput } from "../mappers/user-output-mapper.js";
import { type ChangeUserRoleInput } from "@user/application/dto/user.input.js";

export class ChangeUserRoleUseCase{
    constructor(private userRepository: IUserRepository){}

    async execute( newRole:ChangeUserRoleInput){
        const now = new Date()
        const result = await this.userRepository.findById(newRole.id)
        if(!result){throw new UserNotFoundError()}
        result.changeRole(now,newRole.role,newRole.id)
        await this.userRepository.update(result)
        return toUserOutput(result)
    }
}