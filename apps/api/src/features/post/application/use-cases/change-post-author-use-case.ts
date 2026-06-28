import { type IPostRepository } from "@post/domain/repositories/IPostRepository.js"
import { PostNotFoundError } from "../errors/post-application-errors.js"
import { toPostOutput } from "../mappers/post-output-mapper.js"

export class ChangePostAuthorUseCase {
  constructor(private iPostRepository: IPostRepository) {}

  async execute(postId: number, authorId: number) {
    const now = new Date()

    const post = await this.iPostRepository.findById(postId)

    if (!post) {
      throw new PostNotFoundError()
    }

    post.changeAuthor(now, authorId)

    await this.iPostRepository.update(post)

    return toPostOutput(post)
  }
}