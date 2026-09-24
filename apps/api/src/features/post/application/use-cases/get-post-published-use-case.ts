import { type IPostRepository } from "../../domain/repositories/IPostRepository.js";
import { toPostLisPublishedtOutput } from "../mappers/post-output-mapper.js"
import {type PostsFilters} from "../../domain/value-objects/post-params-filter.js"

export class GetPostPublishedUseCase{
    constructor(private postRepository:IPostRepository){}

    async execute(paramsFilter:PostsFilters){
        const result = await this.postRepository.findAllPublished(paramsFilter)
        if(!result){return []}
            return result.map(toPostLisPublishedtOutput)
    }
}