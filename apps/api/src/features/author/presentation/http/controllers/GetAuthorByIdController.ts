import type { FastifyRequest, FastifyReply } from "fastify";
import { GetAuthorByIdUseCase } from "src/features/author/application/use-cases/get-author-by-id-use-case.js"
import { authorIdParamSchema } from "../schemas/get-author-by-id.schemas.js"

export class GetAuthorByIdController {
  constructor(private getAuthorByIdUseCase: GetAuthorByIdUseCase) {}

  async handle(request: FastifyRequest, reply: FastifyReply) {
    const params = authorIdParamSchema.parse(request.params);
    const author = await this.getAuthorByIdUseCase.execute(params.id);

    return reply.status(200).send(author);
  }
}