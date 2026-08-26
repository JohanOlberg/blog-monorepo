import { CreateUserUseCase } from "@user/application/use-cases/create-user-use-case.js";
import { createUserSchema } from "../schemas/create-user-schema.js";
export class CreateUserController {
    createUserUseCase;
    constructor(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }
    async handle(request, reply) {
        const body = createUserSchema.parse(request.body);
        const userOutput = await this.createUserUseCase.execute(body);
        return reply.status(201).send(userOutput);
    }
}
//# sourceMappingURL=CreateUserController.js.map