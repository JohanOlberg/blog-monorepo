import { type IPostRepository } from "@post/domain/repositories/IPostRepository.js";
import { toPostListOutput } from "../mappers/post-output-mapper.js"
import { PostNotFoundError } from "../errors/post-application-errors.js";


export class ListPostsUseCase{
    constructor(private postRepository:IPostRepository){}

    async execute(){
        const result = await this.postRepository.findAll()
        if(!result){[]}
            return result.map(toPostListOutput)
    }
}