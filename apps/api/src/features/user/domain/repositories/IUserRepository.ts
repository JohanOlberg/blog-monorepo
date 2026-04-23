import { User, NewUser} from "../entities/user.js"

export interface IUserRepository {
    
    save(user:NewUser):Promise<User>
    findByEmail(email:string):Promise<User | null >/*
    update(post:User):Promise<void>
    findById(id:number):Promise<User | null >
    
    findAll():Promise<User[] >*/
    
}
