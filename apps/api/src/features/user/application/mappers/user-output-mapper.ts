import { User } from "../../domain/entities/user.js";
import {type UserOutput} from "../dto/user.output.js"

export function toUserOutput(user:User):UserOutput{
    const props = user.getProps()
    return{
    id: props.id,
    name: props.name,
    email: props.email,
    authorIds:props.authorIds || [],
    status: props.status,
    createdAt: props.createdAt,
    updatedAt: props.updatedAt,
    role: props.role
    }
}
