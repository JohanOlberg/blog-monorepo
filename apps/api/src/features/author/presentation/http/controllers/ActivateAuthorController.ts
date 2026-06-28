import type { FastifyRequest, FastifyReply } from "fastify";
import { ActivateAuthorUserUseCase } from "@author/application/use-cases/activate-author-use-case.js";
import { authorIdParamSchema } from "../schemas/get-author-by-id.schemas.js";

export class ActivateAuthorController {
  constructor(private activateAuthorUseCase: ActivateAuthorUserUseCase) {}

  async handle(request: FastifyRequest, reply: FastifyReply) {
    const params = authorIdParamSchema.parse(request.params);
    const author = await this.activateAuthorUseCase.execute(params.id);

    return reply.status(200).send(author);
  }
}