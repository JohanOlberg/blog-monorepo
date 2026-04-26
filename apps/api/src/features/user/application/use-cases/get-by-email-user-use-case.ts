import { type IUserRepository } from "@user/domain/repositories/IUserRepository.js";
import { UserNotFoundError } from "@user/application/errors/user-application-errors.js";
import { toUserOutput } from "../mappers/user-output-mapper.js";

export class GetByEmailUseCase{
    constructor(private userRepository:IUserRepository){}
    async execute(email:string){
        const result =  await this.userRepository.findByEmail(email)
        if(!result){throw new UserNotFoundError()}
        return toUserOutput(result)
    }
}