import { toAuthorOutput } from "@author/application/mappers/author-output-mappers.js";
import {} from "@author/domain/repository/IAuthorRepository.js";
export class GetAllAuthorsUseCase {
    authorRepository;
    constructor(authorRepository) {
        this.authorRepository = authorRepository;
    }
    async execute() {
        const result = await this.authorRepository.findAll();
        if (!result) {
            return [];
        }
        return result;
    }
}
//# sourceMappingURL=list-author-use-case.js.map