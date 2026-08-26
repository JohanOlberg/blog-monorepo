import type { IPasswordHasher } from "@user/application/contracts/IPasswordHasher.js";
export declare class Argon2PasswordHasher implements IPasswordHasher {
    hash(password: string): Promise<string>;
    verify(password: string, hashedPassword: string): Promise<boolean>;
}
//# sourceMappingURL=argon2-password-hasher.d.ts.map