import { Author, NewAuthor} from "../entities/author.js"

export interface IPostRepository {
    
    save(post:NewAuthor):Promise<Author>
    update(post:Author):Promise<void>
    findById(id:number):Promise<Author | null >
    findAll():Promise<Author[] >
    
}
