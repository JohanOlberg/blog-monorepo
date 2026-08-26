import { toAuthorOutput } from "@author/application/mappers/author-output-mappers.js";
import { UserNotFoundError } from "../errors/author-application-erros.js";
import {} from "@author/domain/repository/IAuthorRepository.js";
import { NewAuthor } from "@author/domain/entities/author.js";
export class CreateAuthorUseCase {
    iAuthorRepository;
    userRepository;
    constructor(iAuthorRepository, userRepository) {
        this.iAuthorRepository = iAuthorRepository;
        this.userRepository = userRepository;
    }
    async execute(input) {
        const userId = await this.userRepository.existsById(input.userId);
        if (!userId) {
            throw new UserNotFoundError();
        }
        const newAuthor = NewAuthor.create(input);
        const author = await this.iAuthorRepository.save(newAuthor);
        return toAuthorOutput(author);
    }
}
//# sourceMappingURL=create-author-use-case.js.map