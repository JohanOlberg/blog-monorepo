import type { CategoryOutput } from "../../application/dto/category.output.js";
import { Category,NewCategory } from "../entities/category.js";

export interface ICategoryRepository{
    save(category:NewCategory):Promise<Category>
    update(category:Category):Promise<Category>
    findById(id:number):Promise<Category | null>
    findAll():Promise<Category[]>
}