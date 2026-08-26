import { userByIdParamSchema } from "../schemas/get-user-by-id-schema.js";
import { BlockUserUseCase } from "@user/application/use-cases/block-user-use-case.js";
export class BlockUserController {
    blockUserUseCase;
    constructor(blockUserUseCase) {
        this.blockUserUseCase = blockUserUseCase;
    }
    async handle(request, reply) {
        const params = userByIdParamSchema.parse(request.params);
        const userOutput = await this.blockUserUseCase.execute(params.id);
        return reply.status(200).send(userOutput);
    }
}
//# sourceMappingURL=BlockUserController.js.map