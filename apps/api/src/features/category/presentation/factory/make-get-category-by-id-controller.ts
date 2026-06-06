import { GetCategoryByIdUseCase } from "../../application/use-cases/get-category-by-id-use-case.js";
import { PrismaCategoryRepository } from "../../infrastructure/persistence/prisma/repositories/prisma-category-repository.js";
import { GetCategotyByIdController } from "../http/controllers/GetCategoryByIdController.js";


export function makeGetCategoryByIdController(){
    const prismaCategoryRepository = new PrismaCategoryRepository()
    const getCategoryByIdUseCase = new GetCategoryByIdUseCase(prismaCategoryRepository)
    const getCategotyByIdController = new GetCategotyByIdController(getCategoryByIdUseCase)
    return getCategotyByIdController
}