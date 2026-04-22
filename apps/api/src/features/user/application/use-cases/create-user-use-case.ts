import { type CreatePostInput } from "@user/presentation/http/schemas/create-user-schema.js";
import { NewUser } from "@user/domain/entities/user.js";
import { type IUserRepository } from "@user/domain/repository/IUserRepository.js";


export class CreateUserUseCase{
    constructor(private readonly iUserRepository:IUserRepository){}

    async  execute(input:CreatePostInput) {
        const existEmail = await this.iUserRepository.findByEmail(input.email)
        if(!existEmail){
            throw new Error()
        }
        const newUser = NewUser.create(input)
        const user = this.iUserRepository.save(newUser)
        return user // criar um dto de saida pra nao trazer todas informacoes do banco
    }
}