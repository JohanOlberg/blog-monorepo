
import { type IPostRepository } from "@posts/domain/repositories/IPostRepository.js";
import {type UpdatePostInput} from '@posts/contracts/input/update-post.schema.js'


export class UpdatePostUseCase{
    constructor(private iPostRepository:IPostRepository){}
    
    async execute(input:UpdatePostInput, id:number){
        const now = new Date()
        const postFound = await this.iPostRepository.findById(id)

        if(postFound){
            postFound.update(now , input)
            await this.iPostRepository.update(postFound)
            return postFound
        }
         throw new Error("Post not found")
    }
}