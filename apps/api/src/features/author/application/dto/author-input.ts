import type { AuthorStatus } from "@author/domain/types/author-status.js"

export type CreateAuthorInput = {
    name:string
    bio:string | null
    avatarUrl:string | null
    userId: number
    //status : AuthorStatus
}

export type UpdateAuthorInput = {
    name:string
    bio:string | null
    avatarUrl:string | null
    //status : AuthorStatus
}