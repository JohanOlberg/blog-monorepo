import { type LoginUserInput } from "@user/application/dto/user.input.js";
import type { IPasswordHasher } from "@user/application/contracts/IPasswordHasher.js";
import type { ITokenService } from "../contracts/ITokenService.js";
import { type IUserRepository } from "@user/domain/repositories/IUserRepository.js";
import type {  LoginUserOutput, UserOutput } from "../dto/user.output.js";
import { toUserOutput } from "../mappers/user-output-mapper.js";


export class LoginUserUseCase{
    constructor(private readonly userRepository:IUserRepository, private readonly passwordHasher:IPasswordHasher, private readonly tokenService:ITokenService){}

    async execute(input:LoginUserInput){
        const existingUser = await this.userRepository.findByEmail(input.email)
    
        if(!existingUser){throw new Error()}

        const props = existingUser.getProps()
        const isValidUser = await this.passwordHasher.verify(input.password, props.passwordHash)

        if(!isValidUser){throw new Error()}

        const payload = {
            sub:String(props.id),
            email:props.email,
        }
        const accessToken =  await this.tokenService.sign(payload)
            
        const user:UserOutput = toUserOutput(existingUser)
        const userToken:LoginUserOutput = {accessToken:accessToken,user}
        

        return userToken
    }

}