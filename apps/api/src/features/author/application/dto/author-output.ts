import type { AuthorStatus } from "@author/domain/types/author-status.js"

export type  AuthorOutput = {
    name:string
    id:number
    email:string
    bio:string | null
    avatarUrl:string | null
    createdAt: Date
    updatedAt: Date
    userId:number
    status : AuthorStatus
}
