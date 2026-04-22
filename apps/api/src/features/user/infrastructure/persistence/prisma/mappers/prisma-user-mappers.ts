import { Prisma } from "@prisma/client";
import  { NewUser, User } from "@user/domain/entities/user.js";

type  PrismaUser = Prisma.UserGetPayload<{}>


export function toPrismaCreate(user:NewUser){
    const props = user.getProps()
    return({
        name:props.name,
        email:props.email,
        passwordHash:props.passwordHash,
        authorsId: props.authorsId,
        status:props.status
    })
}

export function toDomain(prisma:PrismaUser ):User {
      
  return User.restore({
      id: prisma.id,
      name: prisma.name,
      email: prisma.email,
      passwordHash: "",
      updateAt: prisma.updatedAt,
      createAt: prisma.createdAt,
      passwordChangedAt: prisma.passwordChangedAt,
      authors: [],
      stauts: "ACTIVE"
  })
}
