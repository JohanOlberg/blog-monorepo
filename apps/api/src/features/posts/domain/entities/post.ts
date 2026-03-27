import type { Content } from "../value-objects/post-content.js"

type Status = ("DRAFT"|"PUBLISHED"|"ARCHIVED")

type Image = {
    title:string, 
    src:string, 
}

interface  PostProps {
    title:string
    id?:number
    status:Status
    description:string
    slug:string
    categoryId:number  
    content:Content 
    authorId:number  
    createdAt: Date
    updatedAt: Date
    publishedAt: Date | null
    archivedAt: Date | null
}

interface  PostPropsCreate {
    title:string
    status:Status
    description:string
    slug:string
    categoryId:number  
    content?: Content | undefined
    authorId:number 
}


interface  PostPropsUpdate {
    title:string
    status:Status
    slug:string
    description:string
    categoryId:number
    content?:Content 
    authorId:number
    updatedAt: Date
}


export class Post{
constructor(private readonly props:PostProps){}

getProps(){return this.props}


static create(
    post:Omit<PostPropsCreate, "status">,now:Date
    ){
        if(!post.title || post.title.trim() ===""){
            throw new Error("Required Title");
        }
         if(!post.authorId){
            throw new Error("Required Author");
        }
         if(!post.description || post.description.trim() ===""){
            throw new Error("Required Description");
        }
   
  
        return new Post({
            ...post,
            createdAt : now,
            status : 'DRAFT',
            slug : post.slug,
            updatedAt : now,
            publishedAt : null,
            archivedAt : null,
            content: post.content ?? {}
        })
    }

    publish(now: Date){
        if (this.props.status ==='PUBLISHED'){
            throw new Error("Post already Published");
        }
        if(!this.props.categoryId ){
            throw new Error("Required category Text");
        }
        if(!this.props.content.text || this.props.content.text.trim() === ""){
            throw new Error("Required Content Text");
        }
        this.props.status ='PUBLISHED'
        this.props.updatedAt = now
        this.props.publishedAt = now
        this.props.archivedAt = null
    }

    archive(now: Date){
        if (this.props.status ==='ARCHIVED'){
            throw new Error("Post already Archived");
        }
        this.props.status='ARCHIVED'
        this.props.archivedAt = now
        this.props.updatedAt = now  
        this.props.publishedAt = null  
    }
    draft(now: Date){
        if (this.props.status ==='DRAFT'){
            throw new Error("Post already Drafted");
        }
        this.props.status='DRAFT'
        this.props.updatedAt = now   
        this.props.archivedAt = null 
        this.props.publishedAt = null
    }
    update(now:Date, post:PostPropsUpdate){
        if(this.props.status==='PUBLISHED'){
            if(!post.categoryId){
                throw new Error("Required category ");
            }
           /* if(!post.content.text || post.content.text.trim() === ""){
                throw new Error("Required Content ");
            }*/
            if(!post.authorId ){
                throw new Error("Required author ");
            }
            if(!post.description || post.description.trim() === ""){
                throw new Error("Required description ");
            }
            if(!post.title || post.title.trim() === ""){
                throw new Error("Required title ");
            }
            
        }
        if(this.props.status==='DRAFT'){
            if(!post.categoryId){
                throw new Error("Required category ");
            }
            if(!post.authorId ){
                throw new Error("Required author ");
            }
            if(!post.description || post.description.trim() === ""){
                throw new Error("Required description ");
            }
            if(!post.title || post.title.trim() === ""){
                throw new Error("Required title ");
            }
            
        }
        this.props.updatedAt = now
        this.props.categoryId = post.categoryId
        this.props.content = post.content ?? this.props.content
        this.props.authorId = post.authorId
        this.props.description = post.description
        this.props.title = post.title
        this.props.slug = post.slug
    }

    static restore(post:PostProps){
        return new Post(post)
    }
}