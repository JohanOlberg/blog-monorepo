import type { FastifyRequest, FastifyReply } from "fastify";
import { CreateAuthorUseCase } from "@author/application/use-cases/create-author-use-case.js";
import { createAuthorSchema } from "../schemas/create-author.schemas.js";

export class CreateAuthorController {
  constructor(private createAuthorUseCase: CreateAuthorUseCase) {}

  async handle(request: FastifyRequest, reply: FastifyReply) {
    const body = createAuthorSchema.parse(request.body);
    const author = await this.createAuthorUseCase.execute(body);

    return reply.status(201).send(author);
  }
}