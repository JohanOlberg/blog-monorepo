import { type IPostRepository } from "../../domain/repositories/IPostRepository";

export class PublishPostUseCase {
    constructor(private iPostRepository:IPostRepository){}

    async execute(id:string, now:Date){
        const post = await this.iPostRepository.findById(id)
        if(!post){throw new Error("Post not found")}
        post.publish(now)
        await this.iPostRepository.save(post)      
    }
}