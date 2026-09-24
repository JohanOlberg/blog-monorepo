import { Post, NewPost } from "../../../../domain/entities/post.js";
import { type IPostRepository } from "../../../../domain/repositories/IPostRepository.js";
import { toPrismaCreate, toDomain, toPrismaUpdate, toPostListOutput, toPostDetailsOutput, toPostListPublishedOutput, toPostItemDetailsOutput } from "../mappers/prisma-post-mapper.js";
import { prisma } from "../../../../../../shared/infrastructure/database/prisma/prisma-client.js";
import type { PostDetailPublishedOutput, PostDetailsOutput, PostListOutput, PostListPublishedOutput } from "../../../../application/dto/post.output.js";
import type { Prisma } from "@prisma/client";
import {type PostsFilters} from "../../../../domain/value-objects/post-params-filter.js"

 export class PrismaPostRepository implements IPostRepository{

    

    async findAllPublished(myParams:PostsFilters): Promise<PostListPublishedOutput[]> {
        const orderBy: Prisma.PostOrderByWithRelationInput =
        {
            publishedAt:"desc"
        }
        if(myParams.sort==="oldest"){
            orderBy.publishedAt = "asc"
        }
            
        const posts = await prisma.post.findMany({
        include: {
            author: {
                include: {
                user: true,
                },
            },
            category:true 
        },
        where:{ 
                status: "PUBLISHED",

                ...(myParams.category && {
                category: {
                        slug: myParams.category,
                        },
                }),
                ...(myParams.search && {
                    OR: [
                            {
                                title: {
                                    contains: myParams.search,
                                    mode: 'insensitive'
                                },
                            },
                            {
                                description: {
                                    contains: myParams.search,
                                    mode: 'insensitive'
                                },
                            },
                            {
                                content: {
                                    contains: myParams.search,
                                    mode: 'insensitive'
                                },
                            },
                        ],
                }),
            },
            orderBy:orderBy,
    });
        return posts.map(toPostListPublishedOutput)
    }


  

        async findAll(): Promise<PostListOutput[]> {
        const posts = await prisma.post.findMany({
        include: {
            author: {
                include: {
                user: true,
                },
            },
            category:true 
        }
    });
        return posts.map(toPostListOutput)
    }
    
    async findBySlug(slug:string): Promise<PostDetailPublishedOutput | null> {
        const result = await prisma.post.findUnique({
             include: {
            author: {
                include: {
                user: true,
                },
            },
            category:true 
        },
            where:{
                slug: slug
            },
        })
        if(!result){return null}
        return toPostItemDetailsOutput(result)
    }

  async findByIdDetails(id: number): Promise<PostDetailsOutput | null> {
        if(id === undefined){
            throw new Error("Post Not Found!")
        }
        const post = await prisma.post.findUnique({
            include: {
            author: {
                include: {
                user: true,
                },
            },
            category:true 
        },
            where:{
                id: id
            },
            
        })
        if(!post){return null}

        return toPostDetailsOutput(post)
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