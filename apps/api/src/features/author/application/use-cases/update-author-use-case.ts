import { toAuthorOutput } from "@author/application/mappers/author-output-mappers.js";
import { AuthorNotFoundError } from "../errors/author-application-erros.js";
import {type  IAuthorRepository } from "@author/domain/repository/IAuthorRepository.js";
import type { UpdateAuthorInput } from "../dto/author-input.js";

export class UpdateAuthorUserUseCase{
    constructor(private authorRepository:IAuthorRepository){}

    async execute(input:UpdateAuthorInput,id:number){
        const now = new Date()
        const result = await this.authorRepository.findById(id)
         if(!result){throw new AuthorNotFoundError()}
       
        result.update(now,input)
        await this.authorRepository.update(result)
        return toAuthorOutput(result)
    }
}
