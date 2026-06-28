import type { FastifyRequest, FastifyReply } from "fastify";
import { UpdateAuthorUserUseCase } from "@author/application/use-cases/update-author-use-case.js";
import { updateAuthorSchema } from "../schemas/update-author.schemas.js";
import { authorIdParamSchema } from "../schemas/get-author-by-id.schemas.js";

export class UpdateAuthorController {
  constructor(private updateAuthorUseCase: UpdateAuthorUserUseCase) {}

  async handle(request: FastifyRequest, reply: FastifyReply) {
    const params = authorIdParamSchema.parse(request.params);
    const body = updateAuthorSchema.parse(request.body);

    const author = await this.updateAuthorUseCase.execute(body, params.id);

    return reply.status(200).send(author);
  }
}