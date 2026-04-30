import type{  FastifyRequest, FastifyReply } from "fastify";
import { toHTTPError } from "./map-error-to-http.js";


export function globalErrorHandler(error:unknown, request:FastifyRequest, reply:FastifyReply){
    const mappedError = toHTTPError(error)
    reply.status(mappedError.statusCode)
    return reply.send(mappedError)
}