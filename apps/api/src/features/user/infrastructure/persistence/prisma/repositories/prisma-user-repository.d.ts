import type { NewUser, User } from "@user/domain/entities/user.js";
import { type IUserRepository } from "@user/domain/repositories/IUserRepository.js";
export declare class PrismaUserRepository implements IUserRepository {
    existsById(id: number): Promise<boolean>;
    findById(id: number): Promise<User | null>;
    update(user: User): Promise<void>;
    findAll(): Promise<User[]>;
    save(newUser: NewUser): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
}
//# sourceMappingURL=prisma-user-repository.d.ts.map