import { Prisma } from "@prisma/client";
import  { NewUser, User } from "@user/domain/entities/user.js";

type  PrismaUser = Prisma.UserGetPayload<{ include: { authors: true }}>

export function toPrismaCreate(user:NewUser){
    const props = user.getProps()
    return({
        name:props.name,
        email:props.email,
        passwordHash:props.passwordHash,
        status:props.status
    })
}

export function toDomain(prisma:PrismaUser ):User {
      
  return User.restore({
      id: prisma.id,
      name: prisma.name,
      email: prisma.email,
      passwordHash:prisma.passwordHash,
      updatedAt: prisma.updatedAt,
      createdAt: prisma.createdAt,
      passwordChangedAt: prisma.passwordChangedAt,
      authorIds:prisma.authors?.map(a => a.id) ?? [],
      status: prisma.status
  })
}
