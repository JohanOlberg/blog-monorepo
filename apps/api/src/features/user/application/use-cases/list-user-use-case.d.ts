import { type IUserRepository } from "@user/domain/repositories/IUserRepository.js";
export declare class ListUserUseCase {
    private userRepository;
    constructor(userRepository: IUserRepository);
    execute(): Promise<import("../dto/user.output.js").UserOutput[]>;
}
//# sourceMappingURL=list-user-use-case.d.ts.map