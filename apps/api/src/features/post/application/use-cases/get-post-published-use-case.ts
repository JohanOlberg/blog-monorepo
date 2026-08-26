import { type IPostRepository } from "@post/domain/repositories/IPostRepository.js";
import { toPostLisPublishedtOutput } from "../mappers/post-output-mapper.js"


export class GetPostPublishedUseCase{
    constructor(private postRepository:IPostRepository){}

    async execute(){
        const result = await this.postRepository.findAllPublished()
        if(!result){return []}
            return result.map(toPostLisPublishedtOutput)
    }
}