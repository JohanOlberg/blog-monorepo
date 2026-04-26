import { JwtTokenService } from "@shared/infrastructure/security/jwt-token-service.js";
import type {FastifyRequest, FastifyReply } from "fastify";
    const secret = process.env.JWT_SECRET
    if(secret == null){throw  Error("d")}
    const expire = process.env.JWT_EXPIRES_IN
    if(expire == null){ throw  Error("s")}    
    const tokenService = new JwtTokenService(secret, expire)

export async function authGuard(request:FastifyRequest, reply:FastifyReply){
    const authHeader = request.headers.authorization
    if (!authHeader) {
        return reply.status(401).send({ message: "Token missing" })
    }

    const token = authHeader.replace("Bearer ", "")

     try {
        const payload = tokenService.verify(token)
        
        request.user = {
            id: payload.sub,
            email: payload.email,
            ...(payload.role ? { role: payload.role } : {})
        }
    }catch {
        return reply.status(401).send({ message: "Invalid token" })
    }

}