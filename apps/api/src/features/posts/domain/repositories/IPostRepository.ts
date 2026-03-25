import { Post } from "../entities/post"

export interface IPostRepository {
    
    save(post:Post):Promise<void>
    update(post:Post):Promise<void>
    findById(id:number):Promise<Post | null >
    findAll():Promise<Post[] >

}

