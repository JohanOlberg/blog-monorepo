import type { UserRoles } from "../../../features/user/domain/types/user-roles.js"
export type TokenPayload = {
    sub:string,
    email:string,
    role?:UserRoles,
}