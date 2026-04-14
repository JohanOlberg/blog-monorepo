import { Post, NewPost } from "../entities/post.js"

export interface IPostRepository {
    
    save(post:NewPost):Promise<Post>
    update(post:Post):Promise<void>
    findById(id:number):Promise<Post | null >
    findAll():Promise<Post[] >

}

