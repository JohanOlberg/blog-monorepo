import { type IPostRepository } from "@posts/domain/repositories/IPostRepository.js";
import { PostNotFoundError } from "../errors/post-application-errors.js";


export class GetPostByIdUseCase{
    constructor(private iPostRepository:IPostRepository){}

    async execute(id:number){
        const result = await this.iPostRepository.findById(id)
            if(!result){throw new PostNotFoundError()}
                return result
    }
}