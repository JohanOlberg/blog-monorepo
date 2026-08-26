import { type LoginUserInput } from "@user/application/dto/user.input.js";
import type { IPasswordHasher } from "@user/application/contracts/IPasswordHasher.js";
import type { ITokenService } from "@shared/application/contracts/ITokenService.js";
import { type IUserRepository } from "@user/domain/repositories/IUserRepository.js";
import type { LoginUserOutput } from "../dto/user.output.js";
export declare class LoginUserUseCase {
    private readonly userRepository;
    private readonly passwordHasher;
    private readonly tokenService;
    constructor(userRepository: IUserRepository, passwordHasher: IPasswordHasher, tokenService: ITokenService);
    execute(input: LoginUserInput): Promise<LoginUserOutput>;
}
//# sourceMappingURL=login-user-use-case.d.ts.map