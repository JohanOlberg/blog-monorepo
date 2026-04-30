import {type UserStatus } from "@user/domain/types/user-status.js";
import {type UserRoles } from "@user/domain/types/user-roles.js";

export type CreateUserInput = {
    name:string;
    email:string;
    password:string;
    role:UserRoles
}
export type LoginUserInput = {
    email:string;
    password:string;
}


export type UpdateUserInput = {
    name:string;
    email:string;
}

export type ChangeUserPasswordInput = {
    id:number;
    password:string;
}

export type ChangeUserStatusInput = {
    id:number;
    status:UserStatus
}

export type ChangeUserRoleInput = {
    id:number;
    role:UserRoles
}

export type ChangeUserAuthorsInput = {
    id:number;
    authorIds:number[];
}