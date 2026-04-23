import { Prisma } from "@prisma/client";
import  { NewUser, User } from "@user/domain/entities/user.js";

type  PrismaUser = Prisma.UserGetPayload<{}>


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
      passwordHash: "",
      updatedAt: prisma.updatedAt,
      createdAt: prisma.createdAt,
      passwordChangedAt: prisma.passwordChangedAt,
      authorIds: [],
      status: "ACTIVE"
  })
}
