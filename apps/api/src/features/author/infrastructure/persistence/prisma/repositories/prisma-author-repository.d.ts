import { Author, NewAuthor } from "@author/domain/entities/author.js";
import { type IAuthorRepository } from "@author/domain/repository/IAuthorRepository.js";
import type { AuthorOutput } from "@author/application/dto/author-output.js";
export declare class PrismaAuthorRepository implements IAuthorRepository {
    save(author: NewAuthor): Promise<Author>;
    update(author: Author): Promise<void>;
    findById(id: number): Promise<Author | null>;
    findByName(name: string): Promise<Author[]>;
    findAll(): Promise<AuthorOutput[]>;
}
//# sourceMappingURL=prisma-author-repository.d.ts.map