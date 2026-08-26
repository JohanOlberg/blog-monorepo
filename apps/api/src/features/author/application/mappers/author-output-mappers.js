import { Author } from "@author/domain/entities/author.js";
export function toAuthorOutput(author) {
    const props = author.getProps();
    return {
        name: props.name,
        id: props.id,
        bio: props.bio,
        avatarUrl: props.avatarUrl,
        createdAt: props.createdAt,
        updatedAt: props.updatedAt,
        userId: props.userId,
        status: props.status
    };
}
//# sourceMappingURL=author-output-mappers.js.map