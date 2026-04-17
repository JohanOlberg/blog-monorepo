import { type IPostRepository } from "@posts/domain/repositories/IPostRepository.js";
import { PostNotFoundError } from "../errors/post-application-errors.js";

export class DraftPostUseCase {
    constructor(private iPostRepository:IPostRepository){}
    async execute(id:number){
        const now = new Date()
        const result = await this.iPostRepository.findById(id)
        if(!result){ throw new PostNotFoundError()}
        result.archive(now)
        await this.iPostRepository.update(result)
        return result
    }     
}