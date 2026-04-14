import { type IPostRepository } from "../../domain/repositories/IPostRepository.js";

export class PublishPostUseCase {
    constructor(private iPostRepository:IPostRepository){}

    async execute(id:number, now:Date){
        const post = await this.iPostRepository.findById(id)
        if(!post){throw new Error("Post not found")}
        post.publish(now)
        await this.iPostRepository.update(post)      
    }
}