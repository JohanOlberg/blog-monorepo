import { type IAuthorRepository } from "@author/domain/repository/IAuthorRepository.js";
import type { IUserRepository } from "@user/domain/repositories/IUserRepository.js";
export declare class ChangeAuthorUserUseCase {
    private authorRepository;
    private userRepository;
    constructor(authorRepository: IAuthorRepository, userRepository: IUserRepository);
    execute(id: number, userId: number): Promise<{
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
//# sourceMappingURL=change-author-user-use-case.d.ts.map