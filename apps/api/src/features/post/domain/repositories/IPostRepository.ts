import type { PostDetailsOutput, PostListOutput, PostListPublishedOutput } from "@post/application/dto/post.output.js"
import { Post, NewPost } from "../entities/post.js"

export interface IPostRepository {
    
    save(post:NewPost):Promise<Post>
    update(post:Post):Promise<void>
    findById(id:number):Promise<Post | null >
    findBySlug(slug:string):Promise<Post | null >
    findByIdDetails(id:number): Promise<PostDetailsOutput | null>
    findAll():Promise<PostListOutput[] >
    findAllPublished():Promise<PostListPublishedOutput[] >
}

