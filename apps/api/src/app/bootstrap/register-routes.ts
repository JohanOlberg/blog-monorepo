import { postsRoutes } from "src/features/post/presentation/http/routes/posts-routes.js";
import type { FastifyInstance } from "fastify";
import { userRoutes } from "@user/presentation/http/routes/user-routes.js";
import { authRoutes } from "@user/presentation/http/routes/login-routes.js";


export function registerRoutes(server:FastifyInstance){

    server.get('/health', async (request, reply) => {
        return {
            status: 'ok',
            timestamp: new Date().toISOString()
        };    
    });

    postsRoutes(server)
    userRoutes(server)
    authRoutes(server)
}//curl.exe -X PUT http://localhost:3000/posts/6 -H "Content-Type: application/json" --data-binary "@.\body.json"