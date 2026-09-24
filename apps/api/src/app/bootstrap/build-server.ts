import type { FastifyInstance } from "fastify";

import cors from '@fastify/cors';
import { registerPlugins } from './register-plugins.js'
import { registerRoutes } from './register-routes.js'
import { globalErrorHandler } from '../../shared/presentation/http/error-handler/global-error-handler.js'



export function buildServer(server: FastifyInstance){
    

server.register(cors, {
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://blog-monorepo-cms.vercel.app",
    "https://blog-monorepo-blog-ten.vercel.app/",
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
});

server.decorateRequest("user", undefined)
registerPlugins(server)
registerRoutes(server)
server.setErrorHandler(globalErrorHandler)
return server
}




