import { toListCategoryOutput } from "../mappers/category-output-mappers.js";
import {type ICategoryRepository } from "../../domain/repositories/ICategoryRepository.js";
import type { UpdateCategoryInput } from "../dto/category.input.js";

export class UpdateCategoryUseCase {
    constructor(private iCategoryRepository:ICategoryRepository){}

    async execute(input:UpdateCategoryInput, id:number){

        const result = await this.iCategoryRepository.findById(id)
        if(!result){throw new Error("Category not found")}
        result.updateCategory(input)
        const category = await this.iCategoryRepository.update(result)
        return toListCategoryOutput(category)
    }
} 