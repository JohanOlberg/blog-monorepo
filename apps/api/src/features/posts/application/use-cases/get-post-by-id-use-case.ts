import { type IPostRepository } from "../../domain/repositories/IPostRepository";


export class GetPostByIdUseCase{
    constructor(private iPostRepository:IPostRepository){}

    async execute(id:string){
        return this.iPostRepository.findById(id)       
    }
}