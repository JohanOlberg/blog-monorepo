import { prisma } from "@shared/infrastructure/database/prisma/prisma-client.js";
import type { NewUser, User } from "@user/domain/entities/user.js";
import { type IUserRepository } from "@user/domain/repositories/IUserRepository.js";
import { toDomain, toPrismaCreate, toPrismaUpdate } from "../mappers/prisma-user-mappers.js";

export class PrismaUserRepository implements IUserRepository{

    async findById(id: number): Promise<User | null> {
        const result = await prisma.user.findUnique({
                    where:{
                        id: id
                    },
                   include: { authors: true } 
                })
        if(!result){return null}
        return toDomain(result)
    }
    async update(user: User): Promise<void> {
        const props = user.getProps()
        if(props.id === undefined){throw new Error("User not found")}
        const exist = await prisma.user.findUnique({
            where:{
                id: props.id
            },
            select:{
                id:true
            }
        })
         if(!exist){ 
            throw new Error("User Not Found!")
         }
        
        await prisma.user.update({
                        where:{id: props.id},
                        data:toPrismaUpdate(user)
                    })
                
    }

    async findAll(): Promise<User[]> {
        const users = await prisma.user.findMany({include: { authors: true }})
        return users.map(toDomain)
    }

    async save(newUser: NewUser): Promise<User> {
        const user = await prisma.user.create({data:toPrismaCreate(newUser),include: { authors: true }})
        return toDomain(user)
        
    }

    async findByEmail(email: string): Promise<User | null> {
        const result = await prisma.user.findUnique({
                    where:{
                        email: email
                    },
                   include: { authors: true } 
                })
        if(!result){return null}
        return toDomain(result)
    }
}