import { Post } from "../../../../domain/entities/post";
import { IPostRepository } from "../../../../domain/repositories/IPostRepository";
import { toPostCreatePrisma, toPostDomain, toPostUpdatePrisma } from "../mappers/prisma-post-mapper";
import { prisma } from "../../../../../../shared/infrastructure/database/prisma/prisma-client";

export class PrismaPostRepository implements IPostRepository{
    async findAll(): Promise<Post[]> {
        const posts = await prisma.post.findMany()
        return posts.map(toPostDomain)
    }
    async save(post: Post): Promise<void> {
        
        await prisma.post.create({data:toPostCreatePrisma(post)})
    }

    async update(post:Post): Promise<void>{
    const props = post.getProps()
       const exist = await prisma.post.findUnique({
            where:{
                id: props.id
            },
            select:{
                id:true
            }
        })
         if(exist){ 
            await prisma.post.update({
                where:{id: props.id},
                data:toPostUpdatePrisma(post)
            })
        }
    }

    async findById(id: number): Promise<Post | null> {
        const post = await prisma.post.findUnique({
            where:{
                id: id
            },
            
        })
        if(!post){return null}

        return toPostDomain(post)
    }

}