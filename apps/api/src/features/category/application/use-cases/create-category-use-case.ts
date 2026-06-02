import { toListCategoryOutput } from "../mappers/category-output-mappers.js";
import {type ICategoryRepository } from "../../domain/repositories/ICategoryRepository.js";
import type { CreateCategoryInput } from "../dto/category.input.js";
import { NewCategory } from "../../domain/entities/category.js";

export class CreateCategoryUseCase {
    constructor(private iCategoryRepository:ICategoryRepository){}

    async execute(input:CreateCategoryInput){
        const newCategory = NewCategory.create(input)
        const category = await this.iCategoryRepository.save(newCategory)
        return toListCategoryOutput(category)
    }
} 