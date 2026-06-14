import { httpClient } from "../../../shared/api/http-client";
import type { categoryUpdate } from "../model/category.types";

export async function updateCategory(categoryId: number, data:categoryUpdate){
    const result = await httpClient.put(`/categories/${categoryId}`, data)
    return result.data
}