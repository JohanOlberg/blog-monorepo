import { type IUserRepository } from "@user/domain/repositories/IUserRepository.js";
import { type ChangeUserRoleInput } from "@user/application/dto/user.input.js";
export declare class ChangeUserRoleUseCase {
    private userRepository;
    constructor(userRepository: IUserRepository);
    execute(newRole: ChangeUserRoleInput): Promise<import("../dto/user.output.js").UserOutput>;
}
//# sourceMappingURL=change-role-user-use-case.d.ts.map