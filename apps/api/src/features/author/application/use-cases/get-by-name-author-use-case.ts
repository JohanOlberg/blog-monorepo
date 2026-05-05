import { toAuthorOutput } from "@author/application/mappers/author-output-mappers.js";
import { AuthorNotFoundError } from "../errors/author-application-erros.js";
import {type  IAuthorRepository } from "@author/domain/repository/IAuthorRepository.js";

export class GetAuthorsByNameUseCase{
    constructor(private authorRepository:IAuthorRepository){}

    async execute(name:string){
        const result = await this.authorRepository.findByName(name)
         if(!result){throw new AuthorNotFoundError()}
        return result.map(toAuthorOutput)
    }
}
