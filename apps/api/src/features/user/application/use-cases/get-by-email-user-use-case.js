import {} from "@user/domain/repositories/IUserRepository.js";
import { UserNotFoundError } from "@user/application/errors/user-application-errors.js";
import { toUserOutput } from "../mappers/user-output-mapper.js";
export class GetByEmailUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(email) {
        const result = await this.userRepository.findByEmail(email);
        if (!result) {
            throw new UserNotFoundError();
        }
        return toUserOutput(result);
    }
}
//# sourceMappingURL=get-by-email-user-use-case.js.map