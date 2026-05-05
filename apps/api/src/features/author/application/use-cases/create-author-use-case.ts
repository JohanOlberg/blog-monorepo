import { toAuthorOutput } from "@author/application/mappers/author-output-mappers.js";
import { UserNotFoundError } from "../errors/author-application-erros.js";
import {type  IAuthorRepository } from "@author/domain/repository/IAuthorRepository.js";
import { NewAuthor } from "@author/domain/entities/author.js";
import type { CreateAuthorInput } from "../dto/author-input.js";
import type { IUserRepository } from "@user/domain/repositories/IUserRepository.js";


export class CreateAuthorUseCase{
    constructor(private iAuthorRepository:IAuthorRepository, private userRepository: IUserRepository){}

    async execute(input:CreateAuthorInput){
        const userId = await this.userRepository.existsById(input.userId)
        if(!userId){throw new UserNotFoundError()}

        const newAuthor = NewAuthor.create(input)
        const author = await this.iAuthorRepository.save(newAuthor)
        return toAuthorOutput(author)

    }


}

