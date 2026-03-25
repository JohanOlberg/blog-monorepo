import { Post } from "../../domain/entities/post";
import { type IPostRepository } from "../../domain/repositories/IPostRepository";
import {UpdatePostInput} from '../dto/post.input'


export class UpdatePostUseCase{
    constructor(private iPostRepository:IPostRepository){}
    
    async execute(input:UpdatePostInput, id:number){
        const now = new Date
        const postFound = await this.iPostRepository.findById(id)

        if(postFound){
            postFound.update(now , input)
            await this.iPostRepository.update(postFound)
            return postFound
        }
         throw new Error("Post not Found")
    }
}