import { ListCategoryController } from "../http/controllers/ListCategoryController.js";
import { ListCategoryUseCase } from "../../application/use-cases/list-category-use-case.js";
import { PrismaCategoryRepository } from "../../infrastructure/persistence/prisma/repositories/prisma-category-repository.js";

export function makeListCategoryController(){
    const prismaCategoryRepository = new PrismaCategoryRepository()
    const listCategoryUseCase = new ListCategoryUseCase(prismaCategoryRepository)
    const listaCategoryController = new ListCategoryController(listCategoryUseCase)

    return listaCategoryController
}