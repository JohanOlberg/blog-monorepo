import type { ITokenService } from "@shared/application/contracts/ITokenService.js";
import type { TokenPayload } from "@shared/application/contracts/token-payload.js";
export declare class JwtTokenService implements ITokenService {
    private readonly secret;
    private readonly expiresIn;
    constructor(secret: string, expiresIn: string);
    sign(payload: TokenPayload): string;
    isTokenPayload(value: unknown): value is TokenPayload;
    verify(token: string): TokenPayload;
}
//# sourceMappingURL=jwt-token-service.d.ts.map