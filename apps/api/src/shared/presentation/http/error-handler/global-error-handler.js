import { toHTTPError } from "./map-error-to-http.js";
export function globalErrorHandler(error, request, reply) {
    const mappedError = toHTTPError(error);
    reply.status(mappedError.statusCode);
    return reply.send(mappedError);
}
//# sourceMappingURL=global-error-handler.js.map