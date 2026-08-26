import { type IAuthorRepository } from "@author/domain/repository/IAuthorRepository.js";
export declare class GetAuthorByIdUseCase {
    private authorRepository;
    constructor(authorRepository: IAuthorRepository);
    execute(authorId: number): Promise<{
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
//# sourceMappingURL=get-author-by-id-use-case.d.ts.map