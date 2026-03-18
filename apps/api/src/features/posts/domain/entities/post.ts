type Status = ("DRAFT"|"PUBLISHED"|"ARCHIVED")

type Image = {
    title:string, 
    src:string, 
}



type Content = {
        
    image?:Image,
    text:string
}



interface  PostProps {
    title:string
    id:string
    status:Status
    description:string
    categoryId:number | null 
    content:Content 
    authorId:number | null 
    createdAt: Date
    updatedAt: Date
    publishedAt: Date | null
    archivedAt: Date | null
}


interface  PostPropsUpdate {
    title:string
    status:Status
    description:string
    categoryId:number
    content:Content 
    authorId:number
    updatedAt: Date
}


export class Post{
constructor(private readonly props:PostProps){}

getProps(){return this.props}
/*
getPropsUpdate(propsUpdate:Omit<PostProps, "status"|"id"|"publishedAt"|"archivedAt"|"createdAt">)
{ return propsUpdate}*/

static create(
    post:Omit<PostProps, "status"|"updatedAt"|"publishedAt"|"archivedAt"|"categorie"|"content"|"createdAt">,now:Date
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
            updatedAt : now,
            publishedAt : null,
            archivedAt : null,
            categoryId: null,
            content: { text: "" }
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
            if(!post.content.text || post.content.text.trim() === ""){
                throw new Error("Required Content ");
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
        this.props.content = post.content
        this.props.authorId = post.authorId
        this.props.description = post.description
        this.props.title = post.title
    }

    static restore(post:PostProps){
        return new Post(post)
    }
}