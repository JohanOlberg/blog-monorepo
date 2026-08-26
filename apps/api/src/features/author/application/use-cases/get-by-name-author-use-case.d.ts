import { type IAuthorRepository } from "@author/domain/repository/IAuthorRepository.js";
export declare class GetAuthorsByNameUseCase {
    private authorRepository;
    constructor(authorRepository: IAuthorRepository);
    execute(name: string): Promise<{
        name: string;
        id: number;
        bio: string | null;
        avatarUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        status: import("../../domain/types/author-status.js").AuthorStatus;
    }[]>;
}
//# sourceMappingURL=get-by-name-author-use-case.d.ts.map