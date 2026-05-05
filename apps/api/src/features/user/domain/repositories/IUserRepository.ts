import { User, NewUser} from "../entities/user.js"

export interface IUserRepository {
    
    save(user:NewUser):Promise<User>
    findByEmail(email:string):Promise<User | null >
    findById(id:number):Promise<User | null >
    update(user:User):Promise<void>
    existsById(id: number): Promise<boolean>
    
    
    findAll():Promise<User[] >
    
    
}
