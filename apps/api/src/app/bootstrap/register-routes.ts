import { postsRoutes } from "src/features/post/presentation/http/routes/posts-routes.js";
import type { FastifyInstance } from "fastify";
import { userRoutes } from "@user/presentation/http/routes/user-routes.js";
import { categoryRoutes } from "src/features/category/presentation/http/routes/category-routes.js";


export function registerRoutes(server:FastifyInstance){

    server.get('/health', async (request, reply) => {
        return {
            status: 'ok',
            timestamp: new Date().toISOString()
        };    
    });

    postsRoutes(server)
    userRoutes(server)
    categoryRoutes(server)
}