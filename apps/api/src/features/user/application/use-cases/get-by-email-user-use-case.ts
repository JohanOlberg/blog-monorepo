import { type IUserRepository } from "../../domain/repositories/IUserRepository.js";
import { UserNotFoundError } from "../errors/user-application-errors.js";
import { toUserOutput } from "../mappers/user-output-mapper.js";

export class GetByEmailUseCase{
    constructor(private userRepository:IUserRepository){}
    async execute(email:string){
        const result =  await this.userRepository.findByEmail(email)
        if(!result){throw new UserNotFoundError()}
        return toUserOutput(result)
    }
}