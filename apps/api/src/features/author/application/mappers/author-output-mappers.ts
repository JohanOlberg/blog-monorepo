import type { AuthorOutput } from "@author/application/dto/author-output.js";
import { Author } from "@author/domain/entities/author.js";

export function toAuthorOutput(author:Author):AuthorOutput{
    const props = author.getProps()
    return{
        name: props.name,
        id: props.id,
        email: props.email,
        bio: props.bio,
        avatarUrl: props.avatarUrl,
        createdAt: props.createdAt,
        updatedAt: props.updatedAt,
        userId: props.userId,
        status: props.status
    }
}