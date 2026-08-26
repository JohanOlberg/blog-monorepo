import { ChangePasswordUserUseCase } from "@user/application/use-cases/change-password-user-use-case.js";
import { passwordUserSchema } from "../schemas/change-password-schema.js";
import { userByIdParamSchema } from "../schemas/get-user-by-id-schema.js";
export class ChangePasswordUserController {
    changePasswordUserUseCase;
    constructor(changePasswordUserUseCase) {
        this.changePasswordUserUseCase = changePasswordUserUseCase;
    }
    async handle(request, reply) {
        const params = userByIdParamSchema.parse(request.params);
        const body = passwordUserSchema.parse(request.body);
        const userOutput = await this.changePasswordUserUseCase.execute({ ...body, id: params.id });
        return reply.status(200).send(userOutput);
    }
}
//# sourceMappingURL=ChangePasswordUserController.js.map