import { type IAuthorRepository } from "@author/domain/repository/IAuthorRepository.js";
export declare class GetAllAuthorsUseCase {
    private authorRepository;
    constructor(authorRepository: IAuthorRepository);
    execute(): Promise<import("../dto/author-output.js").AuthorOutput[]>;
}
//# sourceMappingURL=list-author-use-case.d.ts.map