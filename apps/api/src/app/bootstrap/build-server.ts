import fastify from 'fastify'

import cors from '@fastify/cors';
import { registerPlugins } from './register-plugins.js'
import { registerRoutes } from './register-routes.js'
import { globalErrorHandler } from '@shared/presentation/http/error-handler/global-error-handler.js'



export function buildServer(){
    
const server = fastify({ logger: true })
server.register(cors, {
  origin: 'http://localhost:5173', // só permite seu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
});

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  console.log(`Servidor rodando em ${address}`);
});
server.decorateRequest("user", undefined)
registerPlugins(server)
registerRoutes(server)
server.setErrorHandler(globalErrorHandler)
return server
}




