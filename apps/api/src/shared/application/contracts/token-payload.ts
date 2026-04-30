import type { UserRoles } from "@user/domain/types/user-roles.js"
export type TokenPayload = {
    sub:string,
    email:string,
    role?:UserRoles,
}