import { User } from "@user/domain/entities/user.js";
import {} from "@user/application/dto/user.output.js";
export function toUserOutput(user) {
    const props = user.getProps();
    return {
        id: props.id,
        name: props.name,
        email: props.email,
        authorIds: props.authorIds || [],
        status: props.status,
        createdAt: props.createdAt,
        updatedAt: props.updatedAt,
        role: props.role
    };
}
//# sourceMappingURL=user-output-mapper.js.map