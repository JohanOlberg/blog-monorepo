import type { ITokenService } from "@shared/application/contracts/ITokenService.js";
import type { TokenPayload } from "@shared/application/contracts/token-payload.js";
import jwt, { type JwtPayload, type SignOptions } from "jsonwebtoken";

export class JwtTokenService implements ITokenService{
    constructor(private readonly secret:string, private readonly expiresIn:string){
        if (!this.secret) {
            throw new Error("JWT_SECRET undefined");
        }
        if (!this.expiresIn) {
            throw new Error("JWT_expiresIn undefined");
        }
    }
    sign(payload: TokenPayload): string{
        
        return jwt.sign(payload, this.secret, { expiresIn: this.expiresIn } as SignOptions );
    }
    isTokenPayload(value: unknown): value is TokenPayload {
        if (typeof value !== "object" || value === null) {
            return false
        }

        const obj = value as Record<string, unknown>

        return (
            typeof obj.email === "string" &&
            typeof obj.sub === "string"
        )
    }
 verify(token: string): TokenPayload {
        const payload =  jwt.verify(token, this.secret)
        if (typeof payload === "string") {
            throw new Error("Invalid token payload")
        }
        
        if(!this.isTokenPayload(payload)){throw new Error("Invalid Payload");}
        return payload
    }
} 