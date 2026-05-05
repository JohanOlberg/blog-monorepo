import type { AuthorStatus } from "@author/domain/types/author-status.js"

export type CreateAuthorInput = {
    name:string
    email:string
    bio:string | null
    avatarUrl:string | null
    userId: number
    //status : AuthorStatus // verificar se tenho esse campo no banco e criar um enum la
}

export type UpdateAuthorInput = {
    name:string
    email:string
    bio:string | null
    avatarUrl:string | null
    userId: number
    //status : AuthorStatus
}