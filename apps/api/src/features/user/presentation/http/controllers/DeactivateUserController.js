import { userByIdParamSchema } from "../schemas/get-user-by-id-schema.js";
import { DeactivateUserUseCase } from "@user/application/use-cases/deactivate-user-use-case.js";
export class DeactivateUserController {
    deactivateUseCase;
    constructor(deactivateUseCase) {
        this.deactivateUseCase = deactivateUseCase;
    }
    async handle(request, reply) {
        const params = userByIdParamSchema.parse(request.params);
        const userOutput = await this.deactivateUseCase.execute(params.id);
        return reply.status(200).send(userOutput);
    }
}
//# sourceMappingURL=DeactivateUserController.js.map