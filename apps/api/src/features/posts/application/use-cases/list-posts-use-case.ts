import { type IPostRepository } from "../../domain/repositories/IPostRepository.js";
import { toPostListOutput } from "../mappers/post-output-mapper.js"


export class PostsListUseCase{
    constructor(private postRepository:IPostRepository){}

    async execute(){
        const result = await this.postRepository.findAll()
        return result.map(toPostListOutput)       
    }
}