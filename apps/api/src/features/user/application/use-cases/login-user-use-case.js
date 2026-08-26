import {} from "@user/application/dto/user.input.js";
import {} from "@user/domain/repositories/IUserRepository.js";
import { toUserOutput } from "../mappers/user-output-mapper.js";
import { InvalidCredentialsError, InvalidUserStatusError } from "@user/domain/errors/user-errors.js";
export class LoginUserUseCase {
    userRepository;
    passwordHasher;
    tokenService;
    constructor(userRepository, passwordHasher, tokenService) {
        this.userRepository = userRepository;
        this.passwordHasher = passwordHasher;
        this.tokenService = tokenService;
    }
    async execute(input) {
        const existingUser = await this.userRepository.findByEmail(input.email);
        if (!existingUser) {
            throw new InvalidCredentialsError();
        }
        const props = existingUser.getProps();
        if (props.status != "ACTIVE") {
            throw new InvalidUserStatusError();
        }
        const isValidUser = await this.passwordHasher.verify(input.password, props.passwordHash);
        if (!isValidUser) {
            throw new InvalidCredentialsError();
        }
        const payload = {
            sub: String(props.id),
            email: props.email,
            role: props.role
        };
        console.log(payload);
        const accessToken = await this.tokenService.sign(payload);
        const user = toUserOutput(existingUser);
        console.log(user.role);
        const userToken = { accessToken: accessToken, user };
        return userToken;
    }
}
//# sourceMappingURL=login-user-use-case.js.map