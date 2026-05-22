import {type UserStatus } from "@user/domain/types/user-status.js";
import {type UserRoles } from "@user/domain/types/user-roles.js";

export type UserOutput = {
    id:number;
    name:string;
    email:string;
    authorIds?:number[];
    status:UserStatus;
    createdAt:Date;
    updatedAt:Date;
    role:UserRoles
}

export type LoginUserOutput = {
  accessToken: string
  user: UserOutput
}
