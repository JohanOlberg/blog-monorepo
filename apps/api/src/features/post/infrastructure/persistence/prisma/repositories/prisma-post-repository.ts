import { Post, NewPost } from "src/features/post/domain/entities/post.js";
import { type IPostRepository } from "src/features/post/domain/repositories/IPostRepository.js";
import { toPrismaCreate, toDomain, toPrismaUpdate } from "../mappers/prisma-post-mapper.js";
import { prisma } from "@shared/infrastructure/database/prisma/prisma-client.js";

export class PrismaPostRepository implements IPostRepository{
    
    async findBySlug(slug:string): Promise<Post | null> {
        const result = await prisma.post.findUnique({
            where:{
                slug: slug
            },
            
        })
        if(!result){return null}
        return toDomain(result)
    }

    async findAll(): Promise<Post[]> {
        const posts = await prisma.post.findMany()
        return posts.map(toDomain)
    }

    async save(newPost: NewPost): Promise<Post> {
        
        const post = await prisma.post.create({data:toPrismaCreate(newPost)})
        return toDomain(post)
    }

    async update(post:Post): Promise<void>{
    const props = post.getProps()
    if(props.id === undefined){
        throw new Error("Post Not Found!")
    }
       const exist = await prisma.post.findUnique({
            where:{
                id: props.id
            },
            select:{
                id:true
            }
        })
         if(!exist){ 
            throw new Error("Post Not Found!")
         }
            await prisma.post.update({
                where:{id: props.id},
                data:toPrismaUpdate(post)
            })
        
    }

    async findById(id: number): Promise<Post | null> {
        if(id === undefined){
            throw new Error("Post Not Found!")
        }
        const post = await prisma.post.findUnique({
            where:{
                id: id
            },
            
        })
        if(!post){return null}

        return toDomain(post)
    }

}