import fastify from 'fastify'
import { registerPlugins } from './register-plugins.js'
import { registerRoutes } from './register-routes.js'
import { globalErrorHandler } from '@shared/presentation/http/error-handler/global-error-handler.js'



export function buildServer(){
    
const server = fastify()
server.decorateRequest("user", undefined)
registerPlugins(server)
registerRoutes(server)
server.setErrorHandler(globalErrorHandler)
return server
}




