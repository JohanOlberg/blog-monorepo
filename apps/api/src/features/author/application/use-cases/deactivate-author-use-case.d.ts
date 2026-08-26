import { type IAuthorRepository } from "@author/domain/repository/IAuthorRepository.js";
export declare class DeactivateAuthorUserUseCase {
    private authorRepository;
    constructor(authorRepository: IAuthorRepository);
    execute(id: number): Promise<{
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
//# sourceMappingURL=deactivate-author-use-case.d.ts.map