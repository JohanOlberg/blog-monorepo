import {} from "@user/domain/repositories/IUserRepository.js";
import { UserNotFoundError } from "@user/application/errors/user-application-errors.js";
import { toUserOutput } from "../mappers/user-output-mapper.js";
import {} from "@user/application/dto/user.input.js";
export class ChangeUserRoleUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(newRole) {
        const now = new Date();
        const result = await this.userRepository.findById(newRole.id);
        if (!result) {
            throw new UserNotFoundError();
        }
        result.changeRole(now, newRole.role );
        await this.userRepository.update(result);
        return toUserOutput(result);
    }
}
//# sourceMappingURL=change-role-user-use-case.js.map