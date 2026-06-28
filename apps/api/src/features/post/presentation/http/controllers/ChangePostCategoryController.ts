import type { FastifyRequest, FastifyReply } from "fastify"
import { postIdParamSchema } from "../schemas/get-post-by-id.schema.js"
//import { changePostCategorySchema } from "../schemas/change-post-category.schema.js"
import { changePostCategorySchema } from "../schemas/change-post-category.schema.js"
import { ChangePostCategoryUseCase } from "@post/application/use-cases/change-post-category-use-case.js"

export class ChangePostCategoryController {
  constructor(private changePostCategoryUseCase: ChangePostCategoryUseCase) {}

  async handle(request: FastifyRequest, reply: FastifyReply) {
    
    const params = postIdParamSchema.parse(request.params)
    const body = changePostCategorySchema.parse(request.body)

    const postOutput = await this.changePostCategoryUseCase.execute(
      params.id,
      body.categoryId
    )

    return reply.status(200).send(postOutput)
  }
}