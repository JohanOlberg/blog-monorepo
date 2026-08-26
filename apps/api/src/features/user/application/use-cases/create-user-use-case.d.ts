import { type CreateUserInput } from "@user/application/dto/user.input.js";
import { type IUserRepository } from "@user/domain/repositories/IUserRepository.js";
import type { IPasswordHasher } from "@user/application/contracts/IPasswordHasher.js";
export declare class CreateUserUseCase {
    private readonly userRepository;
    private passwordHasher;
    constructor(userRepository: IUserRepository, passwordHasher: IPasswordHasher);
    execute(input: CreateUserInput): Promise<import("../dto/user.output.js").UserOutput>;
}
//# sourceMappingURL=create-user-use-case.d.ts.map