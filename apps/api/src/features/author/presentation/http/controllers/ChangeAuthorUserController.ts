import type { FastifyRequest, FastifyReply } from "fastify";
import { ChangeAuthorUserUseCase } from "@author/application/use-cases/change-author-user-use-case.js";
import { authorIdParamSchema } from "../schemas/get-author-by-id.schemas.js";
import { changeAuthorUserSchema } from "../schemas/change-author-user.schemas.js";

export class ChangeAuthorUserController {
  constructor(private changeAuthorUserUseCase: ChangeAuthorUserUseCase) {}

  async handle(request: FastifyRequest, reply: FastifyReply) {
    const params = authorIdParamSchema.parse(request.params);
    const body = changeAuthorUserSchema.parse(request.body);

    const author = await this.changeAuthorUserUseCase.execute(
      params.id,
      body.userId
    );

    return reply.status(200).send(author);
  }
}