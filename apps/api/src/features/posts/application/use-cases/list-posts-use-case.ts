import { type IPostRepository } from "../../domain/repositories/IPostRepository.js";


export class PostsListUseCase{
    constructor(private iPostRepository:IPostRepository){}

    async execute(){
        return this.iPostRepository.findAll()
       
    }
}