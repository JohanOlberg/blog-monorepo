import {type UserStatus } from "@user/domain/types/user-status.js";

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
            throw new Error()
        }
        if(!newUser.email || newUser.email.trim() ===""){
            throw new Error()
        }
        if(!newUser.passwordHash || newUser.passwordHash.trim() ===""){
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
    updatedAt:Date
    createdAt:Date
    passwordChangedAt?:Date
    authorIds?: number[]
    status:UserStatus
}

export class User{
    private constructor(private readonly props:UserProps){}

    getProps(){return this.props}
    
    static restore(user:UserProps){
        return new User(user)
    }
    changeStatus(now: Date){}
    changePassword(now: Date){}
    changeAuthors(now: Date){}
}
