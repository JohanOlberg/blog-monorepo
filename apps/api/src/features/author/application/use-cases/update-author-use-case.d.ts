import { type IAuthorRepository } from "@author/domain/repository/IAuthorRepository.js";
import type { UpdateAuthorInput } from "../dto/author-input.js";
export declare class UpdateAuthorUserUseCase {
    private authorRepository;
    constructor(authorRepository: IAuthorRepository);
    execute(input: UpdateAuthorInput, id: number): Promise<{
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
//# sourceMappingURL=update-author-use-case.d.ts.map