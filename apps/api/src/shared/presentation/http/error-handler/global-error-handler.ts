import type{  FastifyRequest, FastifyReply } from "fastify";
import { toHTTPError } from "./map-error-to-http.js";


export function globalErrorHandler(error:unknown, request:FastifyRequest, reply:FastifyReply){
    const mappedError = toHTTPError(error)

    if (mappedError.statusCode >= 500) {
        request.log.error({ err: error }, "Unhandled API error");
    }

  return reply.status(mappedError.statusCode).send(mappedError);
    
}