import { Author, NewAuthor} from "../entities/author.js"

export interface IAuthorRepository {
    
    save(author:NewAuthor):Promise<Author>
    update(author:Author):Promise<void>
    findById(id:number):Promise<Author | null >
    findByName(name:string):Promise<Author[] >
    findAll():Promise<Author[] >
    
}
