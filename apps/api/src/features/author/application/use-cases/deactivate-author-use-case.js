import { toAuthorOutput } from "@author/application/mappers/author-output-mappers.js";
import { AuthorNotFoundError } from "../errors/author-application-erros.js";
import {} from "@author/domain/repository/IAuthorRepository.js";
export class DeactivateAuthorUserUseCase {
    authorRepository;
    constructor(authorRepository) {
        this.authorRepository = authorRepository;
    }
    async execute(id) {
        const now = new Date();
        const result = await this.authorRepository.findById(id);
        if (!result) {
            throw new AuthorNotFoundError();
        }
        result.deactivate(now);
        await this.authorRepository.update(result);
        return toAuthorOutput(result);
    }
}
//# sourceMappingURL=deactivate-author-use-case.js.map