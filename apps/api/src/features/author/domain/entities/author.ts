import { error } from "console"
import {type AuthorStatus } from "../types/author-status.js"

interface  AuthorCreateProps {
    name:string
    email:string
    bio:string | null
    avatarUrl:string | null
    userId: number
    status : AuthorStatus // verificar se tenho esse campo no banco e criar um enum la
}

interface  AuthorCreateInput{
    name:string
    email:string
    bio:string | null
    avatarUrl:string | null
    userId: number
}


export class NewAuthor{
    private constructor(private readonly props:AuthorCreateProps){}

    getProps(){return this.props}

    static create(input:AuthorCreateInput){
        if(!input.name || input.name.trim() === ""){throw error }
        if(!input.email || input.email.trim() === ""){throw error}
        if(!input.userId || input.userId <= 0){throw error}

        return new NewAuthor(
            {
                ...input, status:"INACTIVE"
            }
        )
    }
}


interface  AuthorProps {
    name:string
    id:number
    email:string
    bio:string | null
    avatarUrl:string | null
    createdAt: Date
    updatedAt: Date
    userId:number
    status : AuthorStatus
}

interface  AuthorPropsUpdate {
    name:string
    email:string
    bio:string | null
    avatarUrl:string | null
}

export class Author{
    private constructor(private readonly props:AuthorProps){}

    getProps(){return this.props}

    static restore(author: AuthorProps){
        return new Author(author)
    }

    update(now:Date, props:AuthorPropsUpdate){

        if(!props.name || props.name.trim() === ""){throw error }
        if(!props.email || props.email.trim() === ""){throw error}        

        this.props.email = props.email
        this.props.name = props.name
        this.props.bio = props.bio 
        this.props.avatarUrl = props.avatarUrl 
        this.props.updatedAt = now     
    }

    activate(now:Date){

        if(this.props.status === "ACTIVE"){throw error}
        if(!this.props.bio || this.props.bio.trim() === ""){throw error} 
        if(!this.props.avatarUrl || this.props.avatarUrl.trim() === ""){throw error}

        this.props.status = "ACTIVE"
        this.props.updatedAt = now        
    }

    deactivate(now:Date){

        if(this.props.status === "INACTIVE"){throw error}

        this.props.status = "INACTIVE"
        this.props.updatedAt = now        
    }

    changeUser(now:Date, userId:number){

        if (!userId || userId <= 0) {throw error}
        if (userId != this.props.userId) {throw error}
        this.props.userId = userId
        this.props.updatedAt = now
    }
}

