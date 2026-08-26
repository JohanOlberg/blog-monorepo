import { LoginUserUseCase } from "@user/application/use-cases/login-user-use-case.js";
import { loginUserSchema } from "../schemas/login-user-schema.js";
export class LoginUserController {
    loginUserUseCase;
    constructor(loginUserUseCase) {
        this.loginUserUseCase = loginUserUseCase;
    }
    async handle(request, reply) {
        const body = loginUserSchema.parse(request.body);
        const userOutput = await this.loginUserUseCase.execute(body);
        return reply.status(200).send(userOutput);
    }
}
//# sourceMappingURL=LoginUserController.js.map