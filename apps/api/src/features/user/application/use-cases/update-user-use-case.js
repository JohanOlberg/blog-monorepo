import {} from "@user/domain/repositories/IUserRepository.js";
import { UserNotFoundError } from "@user/application/errors/user-application-errors.js";
import { toUserOutput } from "../mappers/user-output-mapper.js";
import {} from "../dto/user.input.js";
export class UpdateUserUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(input, id) {
        const now = new Date();
        const result = await this.userRepository.findById(id);
        if (!result) {
            throw new UserNotFoundError();
        }
        result.update(now, input);
        await this.userRepository.update(result);
        return toUserOutput(result);
    }
}
//# sourceMappingURL=update-user-use-case.js.map