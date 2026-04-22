import { NewPost } from "@post/domain/entities/post.js";
import { type IPostRepository } from "@post/domain/repositories/IPostRepository.js";
import { SlugAlreadyExistsError } from "../errors/post-application-errors.js";
import { toPostOutput } from "../mappers/post-output-mapper.js";
import type { CreatePostInput } from "../dto/post.input.js";


export class CreatePostUseCase{
    constructor(private iPostRepository:IPostRepository){}
    
    async execute(input:CreatePostInput){
        const slugAlredyExist = await this.iPostRepository.findBySlug(input.slug)
        if(slugAlredyExist){throw new SlugAlreadyExistsError()}
        
        const newPost = NewPost.create(input)
        const post = await this.iPostRepository.save(newPost)
        return toPostOutput(post)
    }
}