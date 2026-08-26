import {} from "@user/application/dto/user.input.js";
import { NewUser } from "@user/domain/entities/user.js";
import {} from "@user/domain/repositories/IUserRepository.js";
import { toUserOutput } from "../mappers/user-output-mapper.js";
import { EmailAlreadyExistsError } from "@user/domain/errors/user-errors.js";
export class CreateUserUseCase {
    userRepository;
    passwordHasher;
    constructor(userRepository, passwordHasher) {
        this.userRepository = userRepository;
        this.passwordHasher = passwordHasher;
    }
    async execute(input) {
        const existingUser = await this.userRepository.findByEmail(input.email);
        if (existingUser) {
            throw new EmailAlreadyExistsError();
        }
        const hashedPassword = await this.passwordHasher.hash(input.password);
        const { password, ...rest } = input;
        const newUser = NewUser.create({ ...rest, passwordHash: hashedPassword });
        const user = await this.userRepository.save(newUser);
        return toUserOutput(user);
    }
}
//# sourceMappingURL=create-user-use-case.js.map