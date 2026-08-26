import { ListUserUseCase } from "@user/application/use-cases/list-user-use-case.js";
export class ListUserController {
    listUserUseCase;
    constructor(listUserUseCase) {
        this.listUserUseCase = listUserUseCase;
    }
    async handle(request, reply) {
        const userOutput = await this.listUserUseCase.execute();
        return reply.status(200).send(userOutput);
    }
}
//# sourceMappingURL=ListUserController.js.map