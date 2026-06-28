import { toAuthorOutput } from "@author/application/mappers/author-output-mappers.js";
import {type  IAuthorRepository } from "@author/domain/repository/IAuthorRepository.js";

export class GetAllAuthorsUseCase{
    constructor(private authorRepository:IAuthorRepository){}

    async execute(){
        const result = await this.authorRepository.findAll()
         if(!result){return []}
        return result
    }
}
