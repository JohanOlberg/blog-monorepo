import { type IUserRepository } from "@user/domain/repositories/IUserRepository.js";
import { toUserOutput } from "../mappers/user-output-mapper.js";

export class ListUserUseCase{
    constructor(private userRepository:IUserRepository){}
    async execute(){
        const result =  await this.userRepository.findAll()
        if(!result){return []}
        return result.map(toUserOutput)
    }
}