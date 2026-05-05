import { toAuthorOutput } from "@author/application/mappers/author-output-mappers.js";
import { AuthorNotFoundError } from "../errors/author-application-erros.js";
import {type  IAuthorRepository } from "@author/domain/repository/IAuthorRepository.js";

export class DeactivateAuthorUserUseCase{
    constructor(private authorRepository:IAuthorRepository){}

    async execute(id:number){
        const now = new Date()
        const result = await this.authorRepository.findById(id)
         if(!result){throw new AuthorNotFoundError()}
       
        result.deactivate(now)
        await this.authorRepository.update(result)
        return toAuthorOutput(result)
    }
}
