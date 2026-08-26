import { type IAuthorRepository } from "@author/domain/repository/IAuthorRepository.js";
import type { CreateAuthorInput } from "../dto/author-input.js";
import type { IUserRepository } from "@user/domain/repositories/IUserRepository.js";
export declare class CreateAuthorUseCase {
    private iAuthorRepository;
    private userRepository;
    constructor(iAuthorRepository: IAuthorRepository, userRepository: IUserRepository);
    execute(input: CreateAuthorInput): Promise<{
        name: string;
        id: number;
        bio: string | null;
        avatarUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        status: import("../../domain/types/author-status.js").AuthorStatus;
    }>;
}
//# sourceMappingURL=create-author-use-case.d.ts.map