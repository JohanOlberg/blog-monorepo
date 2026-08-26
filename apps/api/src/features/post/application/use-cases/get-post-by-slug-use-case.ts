
import { type IPostRepository } from "@post/domain/repositories/IPostRepository.js";
import { PostNotFoundError } from "../errors/post-application-errors.js";
import { toPostOutput } from "../mappers/post-output-mapper.js";


export class GetPostBySlugUseCase{
    constructor(private iPostRepository:IPostRepository){}

    async execute(slug:string){
        const result = await this.iPostRepository.findBySlug(slug)
            if(!result){throw new PostNotFoundError()}
                return toPostOutput(result)
    }
}