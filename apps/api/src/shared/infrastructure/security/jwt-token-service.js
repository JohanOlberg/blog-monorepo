import jwt, {} from "jsonwebtoken";
export class JwtTokenService {
    secret;
    expiresIn;
    constructor(secret, expiresIn) {
        this.secret = secret;
        this.expiresIn = expiresIn;
        if (!this.secret) {
            throw new Error("JWT_SECRET undefined");
        }
        if (!this.expiresIn) {
            throw new Error("JWT_expiresIn undefined");
        }
    }
    sign(payload) {
        return jwt.sign(payload, this.secret, { expiresIn: this.expiresIn });
    }
    isTokenPayload(value) {
        if (typeof value !== "object" || value === null) {
            return false;
        }
        const obj = value;
        return (typeof obj.email === "string" &&
            typeof obj.sub === "string");
    }
    verify(token) {
        const payload = jwt.verify(token, this.secret);
        if (typeof payload === "string") {
            throw new Error("Invalid token payload");
        }
        if (!this.isTokenPayload(payload)) {
            throw new Error("Invalid Payload");
        }
        return payload;
    }
}
//# sourceMappingURL=jwt-token-service.js.map