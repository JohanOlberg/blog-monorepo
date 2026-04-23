import {type UserStatus } from "@user/domain/types/user-status.js";

export type UserOutput = {
    id:number;
    name:string;
    email:string;
    authorIds?:number[];
    status:UserStatus;
    createdAt:Date;
    updatedAt:Date;
}

export type LoginUserOutput = {
  accessToken: string
  user: UserOutput
}
