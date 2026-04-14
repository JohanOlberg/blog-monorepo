//import {type PostContent } from "../types/post-content.js"
import { type PostStatus } from "../value-objects/post-status.js"


/** Criacao do um novo Post com os inputs necessarios somente */

 
interface  NewPostProps {
    title:string
    status:PostStatus
    slug:string
    description:string
    categoryId:number
    content:string//PostContent 
    authorId:number
}

interface PostCreateInput {
  title: string
  slug: string
  description: string
  categoryId: number
  content:string//PostContent
  authorId: number
}

export class NewPost{
    private constructor(private readonly props:NewPostProps){}
    getProps() {
        return this.props
    }
    static create(
    newPost:PostCreateInput
    ){
        if(!newPost.title || newPost.title.trim() ===""){
            throw new Error("Required Title");
        }
         if(!newPost.authorId){
            throw new Error("Required Author");
        }
         if(!newPost.description || newPost.description.trim() ===""){
            throw new Error("Required Description");
        }
        return new NewPost({
            ...newPost, status:"DRAFT"
        })
    }

}


/** Edicao e exibicao de um post ja persistido com suas respectivas props */

interface  PostProps {
    title:string
    id:number
    status:PostStatus
    description:string
    slug:string
    categoryId:number  
    content:string//PostContent 
    authorId:number  
    createdAt: Date 
    updatedAt: Date 
    publishedAt: Date | null
    archivedAt: Date | null
}


interface  PostPropsUpdate {
    title:string
    slug:string
    description:string
    categoryId:number
    content:string//PostContent 
    authorId:number
}

export class Post{
private constructor(private readonly props:PostProps){}

getProps(){return this.props}



    publish(now: Date){
        if (this.props.status ==='PUBLISHED'){
            throw new Error("Post already Published");
        }
        if(!this.props.categoryId ){
            throw new Error("Required category Text");
        }
        if(this.props.content.length === 0 ){
            throw new Error("Required Content Text or Image");
        }
        if(!this.props.authorId ){
                throw new Error("Required author ");
        }
        if(!this.props.description || this.props.description.trim() === ""){
            throw new Error("Required description ");
        }
        if(!this.props.title || this.props.title.trim() === ""){
            throw new Error("Required title ");
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
        
        if(this.props.status==='PUBLISHED' && post.content.trim() === "" || !post.content || post.content.length === 0){
                throw new Error("Required Content Text or Image");            
        }

        this.props.updatedAt = now
        this.props.categoryId = post.categoryId
        this.props.content = post.content
        this.props.authorId = post.authorId
        this.props.description = post.description
        this.props.title = post.title
        this.props.slug = post.slug
    }

    static restore(post:PostProps){
        return new Post(post)
    }
}