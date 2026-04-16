import { type IPostRepository } from "@posts/domain/repositories/IPostRepository.js";

export class PublishPostUseCase {
    constructor(private iPostRepository:IPostRepository){}
    async execute(id:number){
        const now = new Date()
        const postFound = await this.iPostRepository.findById(id)
       if(postFound){
            postFound.archive(now)
            await this.iPostRepository.update(postFound)
            console.log(postFound)
            return postFound
        }
         throw new Error("Post not found")
    }     
}