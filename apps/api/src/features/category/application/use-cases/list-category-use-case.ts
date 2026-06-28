import { toListCategoryOutput } from "../mappers/category-output-mappers.js";
import {type ICategoryRepository } from "../../domain/repositories/ICategoryRepository.js";

export class ListCategoryUseCase {
    constructor(private iCategoryRepository:ICategoryRepository){}

    async execute(){
        const result = await this.iCategoryRepository.findAll()
        if(!result){throw new Error("Category not found")}
        return result//.map(toListCategoryOutput)
    }
} 