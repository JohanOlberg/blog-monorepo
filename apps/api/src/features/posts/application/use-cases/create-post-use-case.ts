import { Post } from "../../domain/entities/post.js";
import { type IPostRepository } from "../../domain/repositories/IPostRepository.js";
import {type CreatePostInput} from '../dto/post.input.js'


export class CreatePostUseCase{
    constructor(private iPostRepository:IPostRepository){}
    
    async execute(input:CreatePostInput, now:Date){
        const post = Post.create(input,now)
         await this.iPostRepository.save(post)
         return post
    }
}