import { type IPostRepository } from "@post/domain/repositories/IPostRepository.js"
import { PostNotFoundError } from "../errors/post-application-errors.js"
import { toPostOutput } from "../mappers/post-output-mapper.js"

export class ChangePostCategoryUseCase {
  constructor(private iPostRepository: IPostRepository) {}

  async execute(postId: number, categoryId: number) {

    const now = new Date()

    const post = await this.iPostRepository.findById(postId)
    
    if (!post) {
      throw new PostNotFoundError()
    }

    post.changeCategory(now, categoryId)
    await this.iPostRepository.update(post)

    return toPostOutput(post)
  }
}