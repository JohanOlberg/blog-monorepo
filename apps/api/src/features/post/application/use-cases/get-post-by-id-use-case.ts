
import { type IPostRepository } from "@post/domain/repositories/IPostRepository.js";
import { PostNotFoundError } from "../errors/post-application-errors.js";
import { toPostDetailsOutput } from "../mappers/post-output-mapper.js";


export class GetPostByIdUseCase{
    constructor(private iPostRepository:IPostRepository){}

    async execute(id:number){
        const result = await this.iPostRepository.findByIdDetails(id)
            if(!result){throw new PostNotFoundError()}
                return toPostDetailsOutput(result)
    }
}