import { postsRoutes } from "../../features/post/presentation/http/routes/posts-routes.js";
import type { FastifyInstance } from "fastify";
import { userRoutes } from "../../features/user/presentation/http/routes/user-routes.js";
import { categoryRoutes } from "../../features/category/presentation/http/routes/category-routes.js";
import { authorRoutes } from "../../features/author/presentation/http/routes/author-routes.js";


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
    authorRoutes(server)
}