import { type IPostRepository } from "src/features/post/domain/repositories/IPostRepository.js";
import { toPostListOutput } from "../mappers/post-output-mapper.js"
import { PostNotFoundError } from "../errors/post-application-errors.js";


export class PostsListUseCase{
    constructor(private postRepository:IPostRepository){}

    async execute(){
        const result = await this.postRepository.findAll()
        if(!result){throw new PostNotFoundError()}
            return result.map(toPostListOutput)
    }
}