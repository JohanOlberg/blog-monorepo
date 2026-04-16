import { postsRoutes } from "@posts/presentation/http/routes/posts-routes.js";
import type { FastifyInstance } from "fastify";


export function registerRoutes(server:FastifyInstance){

    server.get('/health', async (request, reply) => {
        return {
            status: 'ok',
            timestamp: new Date().toISOString()
        };    
    });

    postsRoutes(server)
}