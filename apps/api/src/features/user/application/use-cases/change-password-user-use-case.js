import {} from "@user/application/dto/user.input.js";
import {} from "@user/domain/repositories/IUserRepository.js";
import { toUserOutput } from "../mappers/user-output-mapper.js";
import { UserNotFoundError } from "../errors/user-application-errors.js";
export class ChangePasswordUserUseCase {
    userRepository;
    passwordHasher;
    constructor(userRepository, passwordHasher) {
        this.userRepository = userRepository;
        this.passwordHasher = passwordHasher;
    }
    async execute(input) {
        const now = new Date();
        const result = await this.userRepository.findById(input.id);
        if (!result) {
            throw new UserNotFoundError();
        }
        const hashedPassword = await this.passwordHasher.hash(input.password);
        result.changePassword(now, hashedPassword);
        await this.userRepository.update(result);
        return toUserOutput(result);
    }
}
//# sourceMappingURL=change-password-user-use-case.js.map