import { type IUserRepository } from "@user/domain/repositories/IUserRepository.js";
import { type UpdateUserInput } from "../dto/user.input.js";
export declare class UpdateUserUseCase {
    private userRepository;
    constructor(userRepository: IUserRepository);
    execute(input: UpdateUserInput, id: number): Promise<import("../dto/user.output.js").UserOutput>;
}
//# sourceMappingURL=update-user-use-case.d.ts.map