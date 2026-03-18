import { Post } from "../../domain/entities/post";
import { type IPostRepository } from "../../domain/repositories/IPostRepository";
import {CreatePostInput} from '../dto/post.input'


export class CreatePostUseCase{
    constructor(private iPostRepository:IPostRepository){}
    async execute(input:CreatePostInput, now:Date){
        const post = Post.create(input,now)
         await this.iPostRepository.save(post)
         return post
    }
}