import { httpClient } from "../../../shared/api/http-client";

export async function getCategoryById(categoryId: number){
    const result = await httpClient.get(`/categories/${categoryId}`)
    return result.data
}