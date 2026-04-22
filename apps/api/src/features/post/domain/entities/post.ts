
import { type PostStatus } from "../value-objects/post-status.js"
import {
  CategoryRequiredError,
  AuthorRequiredError,
  TitleRequiredError,
  DescriptionRequiredError,
  SlugRequiredError,
  ContentRequiredError,
  TitleLengthError,
  DescriptionLengthError,
  InvalidPostStatusError
} from "../errors/post-errors.js";
import { Slug } from "../value-objects/post-slug.js";


 
interface  NewPostProps {
    title:string
    status:PostStatus
    slug:string
    description:string
    categoryId:number
    content:string
    authorId:number
}

interface PostCreateInput {
  title: string
  slug: string
  description: string
  categoryId: number
  content:string
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
            throw new TitleRequiredError();
        }
        if(!newPost.categoryId ){
            throw new CategoryRequiredError();
        }
        if(newPost.title.length <= 10 || newPost.title.length > 30){
            throw new TitleLengthError();
        }
        if(!newPost.authorId){
            throw new AuthorRequiredError();
        }
         if(!newPost.description || newPost.description.trim() ===""){
            throw new DescriptionRequiredError();
        }
        if(newPost.description.length <= 30 || newPost.description.length > 100){
            throw new DescriptionLengthError();
        }
        if(!newPost.slug || newPost.slug.trim() === ""){
            throw new SlugRequiredError();
        }
        const slug:string = Slug.createSlug(newPost.slug).getValue();
        newPost.slug = slug

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
            throw new InvalidPostStatusError();
        }
        if(!this.props.categoryId ){
            throw new CategoryRequiredError();
        }
        if(!this.props.content || this.props.content.trim() === "" || this.props.content.length === 0){
                throw new ContentRequiredError()
        }
        if(!this.props.authorId ){
                throw new AuthorRequiredError();
        }
        if(!this.props.description || this.props.description.trim() === ""){
            throw new DescriptionRequiredError();
        }
        if(!this.props.title || this.props.title.trim() === ""){
            throw new TitleRequiredError();
        }
        if(this.props.title.length <= 10 || this.props.title.length > 30){
            throw new TitleLengthError();
        }
        if(this.props.description.length <= 30 || this.props.description.length > 100){
            throw new DescriptionLengthError();
        }
        if(!this.props.slug || this.props.slug.trim() === ""){
            throw new SlugRequiredError();
        }   
        this.props.status ='PUBLISHED'
        this.props.updatedAt = now
        this.props.publishedAt = now
        this.props.archivedAt = null
    }

    archive(now: Date){
        if (this.props.status ==='ARCHIVED'){
            throw new InvalidPostStatusError();
        }
        this.props.status='ARCHIVED'
        this.props.archivedAt = now
        this.props.updatedAt = now  
        this.props.publishedAt = null  
    }
    draft(now: Date){
        if (this.props.status ==='DRAFT'){
            throw new InvalidPostStatusError();
        }
        this.props.status='DRAFT'
        this.props.updatedAt = now   
        this.props.archivedAt = null 
        this.props.publishedAt = null
    }
    update(now:Date, post:PostPropsUpdate){
        
        if(!post.categoryId){
            throw new CategoryRequiredError();
        }
        if(!post.authorId ){
            throw new AuthorRequiredError();
        }
        if(!post.description || post.description.trim() === ""){
            throw new DescriptionRequiredError();
        }
        if(!post.title || post.title.trim() === ""){
            throw new TitleRequiredError();
        }
        if(post.title.length <= 10 || post.title.length > 30){
            throw new TitleLengthError();
        }
        if(post.description.length <= 30 || post.description.length > 100){
            throw new DescriptionLengthError();
        }
        if(!post.slug || post.slug.trim() === ""){
            throw new SlugRequiredError();
        }  
                  
        
        if(this.props.status==='PUBLISHED' && (!post.content || post.content.trim() === "" || post.content.length === 0)){
                throw new ContentRequiredError();            
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