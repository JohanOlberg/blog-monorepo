import { type IUserRepository } from "@user/domain/repositories/IUserRepository.js";
export declare class DeactivateUserUseCase {
    private userRepository;
    constructor(userRepository: IUserRepository);
    execute(id: number): Promise<import("../dto/user.output.js").UserOutput>;
}
//# sourceMappingURL=deactivate-user-use-case.d.ts.map