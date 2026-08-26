import { toAuthorOutput } from "@author/application/mappers/author-output-mappers.js";
import { AuthorNotFoundError } from "../errors/author-application-erros.js";
import {} from "@author/domain/repository/IAuthorRepository.js";
export class GetAuthorByIdUseCase {
    authorRepository;
    constructor(authorRepository) {
        this.authorRepository = authorRepository;
    }
    async execute(authorId) {
        const result = await this.authorRepository.findById(authorId);
        if (!result) {
            throw new AuthorNotFoundError();
        }
        return toAuthorOutput(result);
    }
}
//# sourceMappingURL=get-author-by-id-use-case.js.map