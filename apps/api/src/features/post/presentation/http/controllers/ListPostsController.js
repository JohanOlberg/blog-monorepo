import { ListPostsUseCase } from "@post/application/use-cases/list-posts-use-case.js";
export class ListPostsController {
    listPostUseCase;
    constructor(listPostUseCase) {
        this.listPostUseCase = listPostUseCase;
    }
    async handle(request, reply) {
        const posts = await this.listPostUseCase.execute();
        return reply.status(200).send(posts);
    }
}
//# sourceMappingURL=ListPostsController.js.map