import { type IPostRepository } from "@posts/domain/repositories/IPostRepository.js";


export class GetPostByIdUseCase{
    constructor(private iPostRepository:IPostRepository){}

    async execute(id:number){
        return this.iPostRepository.findById(id)       
    }
}