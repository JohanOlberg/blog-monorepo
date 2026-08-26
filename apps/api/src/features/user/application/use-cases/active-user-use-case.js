import {} from "@user/domain/repositories/IUserRepository.js";
import { UserNotFoundError } from "@user/application/errors/user-application-errors.js";
import { toUserOutput } from "../mappers/user-output-mapper.js";
export class ActivateUserUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(id) {
        const now = new Date();
        const result = await this.userRepository.findById(id);
        if (!result) {
            throw new UserNotFoundError();
        }
        result.activate(now);
        await this.userRepository.update(result);
        return toUserOutput(result);
    }
}
//# sourceMappingURL=active-user-use-case.js.map