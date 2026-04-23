import { prisma } from "@shared/infrastructure/database/prisma/prisma-client.js";
import type { NewUser, User } from "@user/domain/entities/user.js";
import { type IUserRepository } from "@user/domain/repositories/IUserRepository.js";
import { toDomain, toPrismaCreate } from "../mappers/prisma-user-mappers.js";

export class PrismaUserRepository implements IUserRepository{
    async save(newUser: NewUser): Promise<User> {
        const user = await prisma.user.create({data:toPrismaCreate(newUser)})
        return toDomain(user)
        
    }async findByEmail(email: string): Promise<User | null> {
        const result = await prisma.user.findUnique({
                    where:{
                        email: email
                    },
                    
                })
        if(!result){return null}
        return toDomain(result)
    }/*
    async update(post: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async findById(id: number): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    
    async findAll(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }*/
}