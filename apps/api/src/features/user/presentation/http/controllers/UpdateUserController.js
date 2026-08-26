import { UpdateUserUseCase } from "@user/application/use-cases/update-user-use-case.js";
import { updateUserSchema } from "../schemas/update-user-schema.js";
import { userByIdParamSchema } from "../schemas/get-user-by-id-schema.js";
export class UpdateUserController {
    updateUserUseCase;
    constructor(updateUserUseCase) {
        this.updateUserUseCase = updateUserUseCase;
    }
    async handle(request, reply) {
        const params = userByIdParamSchema.parse(request.params);
        const body = updateUserSchema.parse(request.body);
        const userOutput = await this.updateUserUseCase.execute(body, params.id);
        return reply.status(200).send(userOutput);
    }
}
//# sourceMappingURL=UpdateUserController.js.map