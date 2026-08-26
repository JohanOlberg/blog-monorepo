import {} from "@user/domain/repositories/IUserRepository.js";
import { toUserOutput } from "../mappers/user-output-mapper.js";
export class ListUserUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute() {
        const result = await this.userRepository.findAll();
        if (!result) {
            return [];
        }
        return result.map(toUserOutput);
    }
}
//# sourceMappingURL=list-user-use-case.js.map