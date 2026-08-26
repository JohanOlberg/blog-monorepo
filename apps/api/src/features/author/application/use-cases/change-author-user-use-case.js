import { toAuthorOutput } from "@author/application/mappers/author-output-mappers.js";
import { UserNotFoundError, AuthorNotFoundError } from "../errors/author-application-erros.js";
import {} from "@author/domain/repository/IAuthorRepository.js";
export class ChangeAuthorUserUseCase {
    authorRepository;
    userRepository;
    constructor(authorRepository, userRepository) {
        this.authorRepository = authorRepository;
        this.userRepository = userRepository;
    }
    async execute(id, userId) {
        const now = new Date();
        const authorExist = await this.authorRepository.findById(id);
        if (!authorExist) {
            throw new AuthorNotFoundError();
        }
        const user = await this.userRepository.existsById(userId);
        if (!user) {
            throw new UserNotFoundError();
        }
        authorExist.changeUser(now, userId);
        await this.authorRepository.update(authorExist);
        return toAuthorOutput(authorExist);
    }
}
//# sourceMappingURL=change-author-user-use-case.js.map