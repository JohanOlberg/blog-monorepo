import { NewPost } from "@posts/domain/entities/post.js";
import { type IPostRepository } from "@posts/domain/repositories/IPostRepository.js";
import {type CreatePostInput} from "@posts/application/dto/create-post.schema.js"
import { SlugAlreadyExistsError } from "../errors/post-application-errors.js";



export class CreatePostUseCase{
    constructor(private iPostRepository:IPostRepository){}
    
    async execute(input:CreatePostInput){
        const slugAlredyExist = await this.iPostRepository.findBySlug(input.slug)
        if(slugAlredyExist){throw new SlugAlreadyExistsError()}
        
        const newPost = NewPost.create(input)
        const post = await this.iPostRepository.save(newPost)
         return post
    }
}