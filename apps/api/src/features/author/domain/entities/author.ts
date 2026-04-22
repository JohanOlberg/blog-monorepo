
interface  AuthorCreateProps {
    name:string
    id:string
    email:string
    bio?:string
    avatarUrl?:string
    createdAt: Date
    updatedAt: Date

}
export class NewAuthor{
    private constructor(private readonly props:AuthorCreateProps){}

    getProps(){return this.props}
}


interface  AuthorProps {
    name:string
    id:string
    email:string
    bio?:string
    avatarUrl?:string
    createdAt: Date
    updatedAt: Date

}
export class Author{
    private constructor(private readonly props:AuthorProps){}

    getProps(){return this.props}
}

