import {Author} from "@author/domain/entities/author.js"

type UserStatus = "ACTIVE"|"INACTIVE"|"BLOCKED"//criar type igual status em POst

interface UserCreateProps{
    name:string
    email:string
    passwordHash:string
    authorsId: number[]
    status:UserStatus
}

interface UserCreateInput{
    name:string
    email:string
    passwordHash:string
    authorsId: number[]
    
}

export class NewUser{
    private constructor(private readonly props:UserCreateProps){}
    getProps() {
        return this.props
    }

    static create(newUser:UserCreateInput){
        if(!newUser.name || newUser.name.trim() ===""){
            throw new Error()
        }
        if(!newUser.email || newUser.email.trim() ===""){
            throw new Error()
        }
        if(!newUser.authorsId || newUser.authorsId.length < 0){
            throw new Error()
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
    updateAt:Date
    createAt:Date
    passwordChangedAt:Date
    authors: number[]
    stauts:UserStatus
}

export class User{
    private constructor(private readonly props:UserProps){}

    getProps(){return this.props}
    
        static restore(user:UserProps){
            return new User(user)
        }
}
