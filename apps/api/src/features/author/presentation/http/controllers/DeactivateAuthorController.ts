import type { FastifyRequest, FastifyReply } from "fastify";
import { DeactivateAuthorUserUseCase } from "@author/application/use-cases/deactivate-author-use-case.js";
import { authorIdParamSchema } from "../schemas/get-author-by-id.schemas.js";

export class DeactivateAuthorController {
  constructor(private deactivateAuthorUseCase: DeactivateAuthorUserUseCase) {}

  async handle(request: FastifyRequest, reply: FastifyReply) {
    const params = authorIdParamSchema.parse(request.params);
    const author = await this.deactivateAuthorUseCase.execute(params.id);

    return reply.status(200).send(author);
  }
}