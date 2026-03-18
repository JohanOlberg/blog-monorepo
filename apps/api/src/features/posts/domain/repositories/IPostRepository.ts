import { Post } from "../entities/post"

export interface IPostRepository {
    
    save(post:Post):Promise<void>
    findById(id:string):Promise<Post | null >
    findAll():Promise<Post[] >
}

