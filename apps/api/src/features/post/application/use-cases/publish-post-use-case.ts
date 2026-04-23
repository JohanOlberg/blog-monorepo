import { type IPostRepository } from "@post/domain/repositories/IPostRepository.js";
import { PostNotFoundError } from "../errors/post-application-errors.js";
import { toPostOutput } from "../mappers/post-output-mapper.js";


export class PublishPostUseCase {
    constructor(private iPostRepository:IPostRepository){}
    async execute(id:number){
        const now = new Date()
        const result = await this.iPostRepository.findById(id)
       if(!result){throw new PostNotFoundError()}
            result.publish(now)
            await this.iPostRepository.update(result)
            return toPostOutput(result)
    }     
}