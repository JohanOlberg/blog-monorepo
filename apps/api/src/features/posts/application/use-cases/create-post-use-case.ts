import { NewPost } from "../../domain/entities/post.js";
import { type IPostRepository } from "../../domain/repositories/IPostRepository.js";
import {type CreatePostInput} from "../../contracts/input/create-post.schema.js"


export class CreatePostUseCase{
    constructor(private iPostRepository:IPostRepository){}
    
    async execute(input:CreatePostInput){
        const newPost = NewPost.create(input)
         const post = await this.iPostRepository.save(newPost)
         return post
    }
}