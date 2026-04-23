import {type TokenPayload} from "./token-payload.js"
export interface ITokenService {
    sign(payload: TokenPayload): string
    verify(token: string): TokenPayload
}