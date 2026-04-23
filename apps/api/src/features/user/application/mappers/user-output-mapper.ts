import { User } from "@user/domain/entities/user.js";
import {type UserOutput} from "@user/application/dto/user.output.js"

export function toUserOutput(user:User):UserOutput{
    const props = user.getProps()
    return{
    id: props.id,
    name: props.name,
    email: props.email,
    authorIds:props.authorIds || [],
    status: props.status,
    createdAt: props.createdAt,
    updatedAt: props.updatedAt
    }
}
