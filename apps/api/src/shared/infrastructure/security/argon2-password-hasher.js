import argon2 from 'argon2';
export class Argon2PasswordHasher {
    async hash(password) {
        return argon2.hash(password, {
            type: argon2.argon2id,
            memoryCost: 2 ** 16,
            timeCost: 3,
            parallelism: 2
        });
    }
    async verify(password, hashedPassword) {
        return argon2.verify(hashedPassword, password);
    }
}
//# sourceMappingURL=argon2-password-hasher.js.map