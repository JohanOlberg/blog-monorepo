import { userByIdParamSchema } from "../schemas/get-user-by-id-schema.js";
import { ActivateUserUseCase } from "@user/application/use-cases/active-user-use-case.js";
export class ActivateUserController {
    activateUseCase;
    constructor(activateUseCase) {
        this.activateUseCase = activateUseCase;
    }
    async handle(request, reply) {
        const params = userByIdParamSchema.parse(request.params);
        const userOutput = await this.activateUseCase.execute(params.id);
        return reply.status(200).send(userOutput);
    }
}
//# sourceMappingURL=ActivateUserController.js.map