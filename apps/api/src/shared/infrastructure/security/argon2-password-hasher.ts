import type { IPasswordHasher } from "@user/application/contracts/IPasswordHasher.js";
import argon2 from 'argon2';

export class Argon2PasswordHasher implements IPasswordHasher{

    async hash(password: string): Promise<string> {
        return argon2.hash(password, {
            type: argon2.argon2id, 
            memoryCost: 2 ** 16,   
            timeCost: 3,           
            parallelism: 2          
        });
    }

    async verify(password: string, hashedPassword: string): Promise<boolean> {
        return argon2.verify(hashedPassword, password);
    }
    
}