import { toAuthorOutput } from "@author/application/mappers/author-output-mappers.js";
import { UserNotFoundError, AuthorNotFoundError } from "../errors/author-application-erros.js";
import {type  IAuthorRepository } from "@author/domain/repository/IAuthorRepository.js";
import type { IUserRepository } from "@user/domain/repositories/IUserRepository.js";


export class ChangeAuthorUserUseCase{
    constructor(private authorRepository:IAuthorRepository, private userRepository: IUserRepository){}

    async execute(id:number, userId: number){
        const now = new Date()
        const authorExist = await this.authorRepository.findById(id)
         if(!authorExist){throw new AuthorNotFoundError()}

        const user = await this.userRepository.existsById(userId)
        if(!user){throw new UserNotFoundError()}
        authorExist.changeUser(now , userId)
        await this.authorRepository.update(authorExist)
        return toAuthorOutput(authorExist)

    }


}

