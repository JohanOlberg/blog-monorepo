import type { FastifyRequest, FastifyReply } from "fastify"
import { postIdParamSchema } from "../schemas/get-post-by-id.schema.js"
import { changePostAuthorSchema } from "../schemas/change-post-author.schema.js"
import { ChangePostAuthorUseCase } from "@post/application/use-cases/change-post-author-use-case.js"

export class ChangePostAuthorController {
  constructor(private changePostAuthorUseCase: ChangePostAuthorUseCase) {}

  async handle(request: FastifyRequest, reply: FastifyReply) {
    const params = postIdParamSchema.parse(request.params)
    const body = changePostAuthorSchema.parse(request.body)

    const postOutput = await this.changePostAuthorUseCase.execute(
      params.id,
      body.authorId
    )

    return reply.status(200).send(postOutput)
  }
}