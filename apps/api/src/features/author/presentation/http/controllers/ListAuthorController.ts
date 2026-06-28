import type { FastifyRequest, FastifyReply } from "fastify";
import { GetAllAuthorsUseCase } from "@author/application/use-cases/list-author-use-case.js";

export class ListAuthorController {
  constructor(private getAllAuthorsUseCase: GetAllAuthorsUseCase) {}

  async handle(request: FastifyRequest, reply: FastifyReply) {
    const authors = await this.getAllAuthorsUseCase.execute();

    return reply.status(200).send(authors);
  }
}