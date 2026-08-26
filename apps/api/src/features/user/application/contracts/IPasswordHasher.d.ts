export interface IPasswordHasher {
    hash(password: string): Promise<string>;
    verify(password: string, hashedPassword: string): Promise<boolean>;
}
//# sourceMappingURL=IPasswordHasher.d.ts.map