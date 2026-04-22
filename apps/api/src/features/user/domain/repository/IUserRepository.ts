import { User, NewUser} from "../entities/user.js"

export interface IUserRepository {
    
    save(user:NewUser):Promise<User>
    update(post:User):Promise<void>
    findById(id:number):Promise<User | null >
    findByEmail(email:string):Promise<User | null >
    findAll():Promise<User[] >
    
}
