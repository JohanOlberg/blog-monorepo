import type { PostDetailPublishedOutput, PostDetailsOutput, PostListOutput, PostListPublishedOutput } from "../../application/dto/post.output.js"
import { Post, NewPost } from "../entities/post.js"
import {type PostsFilters} from "../value-objects/post-params-filter.js"

export interface IPostRepository {
    
    save(post:NewPost):Promise<Post>
    update(post:Post):Promise<void>
    findById(id:number):Promise<Post | null >
    findBySlug(slug:string):Promise<PostDetailPublishedOutput | null >
    findByIdDetails(id:number): Promise<PostDetailsOutput | null>
    findAll():Promise<PostListOutput[] >
    findAllPublished(myParams:PostsFilters):Promise<PostListPublishedOutput[] >
}

