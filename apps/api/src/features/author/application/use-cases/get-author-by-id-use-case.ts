import { toAuthorOutput } from "@author/application/mappers/author-output-mappers.js";
import { AuthorNotFoundError } from "../errors/author-application-erros.js";
import {type  IAuthorRepository } from "@author/domain/repository/IAuthorRepository.js";

export class GetAuthorByIdUseCase{
    constructor(private authorRepository:IAuthorRepository){}

    async execute(authorId:number){
        const result = await this.authorRepository.findById(authorId)
         if(!result){throw new AuthorNotFoundError()}
        return toAuthorOutput(result)
    }
}
