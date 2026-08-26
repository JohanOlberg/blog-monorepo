import { toAuthorOutput } from "@author/application/mappers/author-output-mappers.js";
import { AuthorNotFoundError } from "../errors/author-application-erros.js";
import {} from "@author/domain/repository/IAuthorRepository.js";
export class GetAuthorsByNameUseCase {
    authorRepository;
    constructor(authorRepository) {
        this.authorRepository = authorRepository;
    }
    async execute(name) {
        const result = await this.authorRepository.findByName(name);
        if (!result) {
            throw new AuthorNotFoundError();
        }
        return result.map(toAuthorOutput);
    }
}
//# sourceMappingURL=get-by-name-author-use-case.js.map