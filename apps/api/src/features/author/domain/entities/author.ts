import {type AuthorStatus } from "../types/author-status.js"

interface AuthorCreateProps {
  name: string;
  bio: string | null;
  avatarUrl: string | null;
  userId: number;
  status: AuthorStatus;
}

interface  AuthorCreateInput{
    name:string
    bio:string | null
    avatarUrl:string | null
    userId: number
}


export class NewAuthor{
    private constructor(private readonly props:AuthorCreateProps){}

    getProps(){return this.props}

    static create(input:AuthorCreateInput){
        if(!input.name || input.name.trim() === ""){throw new Error("Author name is required")}
        if(!input.userId || input.userId <= 0){throw new Error("Author name is required")}

        return new NewAuthor(
            {
                ...input, status:"ACTIVE"
            }
        )
    }
}


interface AuthorProps {
  id: number;
  name: string;
  bio: string | null;
  avatarUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  status: AuthorStatus;
}

interface AuthorPropsUpdate {
  name: string;
  bio: string | null;
  avatarUrl: string | null;
}

export class Author{
    private constructor(private readonly props:AuthorProps){}

    getProps(){return this.props}

    static restore(author: AuthorProps){
        return new Author(author)
    }

    update(now:Date, props:AuthorPropsUpdate){

        if(!props.name || props.name.trim() === ""){throw new Error("Author name is required") }
        
        this.props.name = props.name
        this.props.bio = props.bio 
        this.props.avatarUrl = props.avatarUrl 
        this.props.updatedAt = now     
    }

    activate(now:Date){

        //if(this.props.status === "ACTIVE"){throw new Error("Author status is required")}
        if(!this.props.bio || this.props.bio.trim() === ""){throw new Error("Author bio is required")} 
        if(!this.props.avatarUrl || this.props.avatarUrl.trim() === ""){throw new Error("Author avatar is required")}

        //this.props.status = "ACTIVE"
        this.props.updatedAt = now        
    }

    deactivate(now:Date){

        //if(this.props.status === "INACTIVE"){throw new Error("Author status is required")}

        //this.props.status = "INACTIVE"
        this.props.updatedAt = now        
    }

    changeUser(now:Date, userId:number){

        if (!userId || userId <= 0) {throw new Error("Author userId is required")}
        if (userId != this.props.userId) {throw new Error("Author userId is required")}
        this.props.userId = userId
        this.props.updatedAt = now
    }
}

