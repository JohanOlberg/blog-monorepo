import type { AuthorOutput } from "../dto/author-output.js";
import { Author } from "../../domain/entities/author.js";

export function toAuthorOutput(author:Author){
    const props = author.getProps()
    return{
        name: props.name,
        id: props.id,
        bio: props.bio,
        avatarUrl: props.avatarUrl,
        createdAt: props.createdAt,
        updatedAt: props.updatedAt,
        userId: props.userId,
        status: props.status
    }
}