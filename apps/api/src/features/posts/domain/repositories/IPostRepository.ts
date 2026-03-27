import { Post } from "../entities/post.js"

export interface IPostRepository {
    
    save(post:Post):Promise<void>
    update(post:Post):Promise<void>
    findById(id:number):Promise<Post | null >
    findAll():Promise<Post[] >

}

