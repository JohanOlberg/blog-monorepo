import { type IUserRepository } from "@user/domain/repositories/IUserRepository.js";
export declare class GetByEmailUseCase {
    private userRepository;
    constructor(userRepository: IUserRepository);
    execute(email: string): Promise<import("../dto/user.output.js").UserOutput>;
}
//# sourceMappingURL=get-by-email-user-use-case.d.ts.map