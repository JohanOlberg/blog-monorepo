
import { type IPostRepository } from "@posts/domain/repositories/IPostRepository.js";
import {type UpdatePostInput} from '@posts/contracts/input/update-post.schema.js'
import { PostNotFoundError, SlugAlreadyExistsError } from "../errors/post-application-errors.js";


export class UpdatePostUseCase{
    constructor(private iPostRepository:IPostRepository){}
    
    async execute(input:UpdatePostInput, id:number){
        const result = await this.iPostRepository.findById(id)

        if(!result){ throw new PostNotFoundError()}
            
            const slugAlredyExist = await this.iPostRepository.findBySlug(input.slug)
            
            if(slugAlredyExist){
                const slugResult = slugAlredyExist.getProps()
                if(slugResult.id !== id){
                    throw new SlugAlreadyExistsError()
                }
            }
            const now = new Date()
            result.update(now , input)
            await this.iPostRepository.update(result)
            return result
            
        
        
    }
}