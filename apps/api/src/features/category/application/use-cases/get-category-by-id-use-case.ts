import { toListCategoryOutput } from "../mappers/category-output-mappers.js";
import {type ICategoryRepository } from "../../domain/repositories/ICategoryRepository.js";

export class GetCategoryByIdUseCase {
    constructor(private iCategoryRepository:ICategoryRepository){}

    async execute(id:number){
        const result = await this.iCategoryRepository.findById(id)
        if(!result){throw new Error("Category not found")}
        return toListCategoryOutput(result)
    }
} 