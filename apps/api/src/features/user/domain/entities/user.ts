import { type UserStatus } from "@user/domain/types/user-status.js";
import { 
  NameRequiredError,
  EmailRequiredError,
  PasswordHashRequiredError,
  InvalidUserStatusError
} from "../errors/user-errors.js";

interface NewUserProps{
    name:string
    email:string
    passwordHash:string
    status:UserStatus
}

interface NewUserInput{
    name:string
    email:string
    passwordHash:string   
}

export class NewUser{
    private constructor(private readonly props:NewUserProps){}
    getProps() {
        return this.props
    }

    static create(newUser:NewUserInput){
        if(!newUser.name || newUser.name.trim() ===""){
            throw new NameRequiredError();
        }
        if(!newUser.email || newUser.email.trim() ===""){
            throw new EmailRequiredError()
        }
        if(!newUser.passwordHash || newUser.passwordHash.trim() ===""){
            throw new PasswordHashRequiredError()
        }

        return new NewUser({
            ...newUser, status:"ACTIVE"
        })
        
    }
}


interface UserProps{
    id:number
    name:string
    email:string
    passwordHash:string
    updatedAt:Date
    createdAt:Date
    passwordChangedAt?:Date
    authorIds: number[]
    status:UserStatus
}

interface UserPropsUpdate{
    
    name:string
    email:string
}

export class User{
    private constructor(private readonly props:UserProps){}

    getProps(){return this.props}
    
    update(now:Date, data:UserPropsUpdate){
        if(!data.name || data.name.trim() ===""){
            throw new NameRequiredError();
        }
        if(!data.email || data.email.trim() ===""){
            throw new EmailRequiredError()
        }
        this.props.email = data.email
        this.props.name = data.name
        this.props.updatedAt = now
    }
   
    activate(now: Date){
        if(this.props.status === "ACTIVE")
        {
            throw new InvalidUserStatusError()
        }
        this.props.status = "ACTIVE"
        this.props.updatedAt = now
    }

    deactivate(now: Date){
        if(this.props.status === "INACTIVE")
        {
            throw new InvalidUserStatusError()
        }
        this.props.status = "INACTIVE"
        this.props.updatedAt = now
    }  

    block(now: Date){
        if(this.props.status === "BLOCKED")
        {
            throw new InvalidUserStatusError()
        }
        this.props.status = "BLOCKED"
        this.props.updatedAt = now
    }

    changePassword(now:Date, passwordHash:string){

    }
    changeAuthors(now: Date){}
    
    static restore(user:UserProps){
        return new User(user)
    }
}