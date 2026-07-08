import { httpClient } from "../../../shared/api/http-client";
import type { categoryCreateInput } from "../model/category.types";

export async function createCategory(data: categoryCreateInput){
    const result = await httpClient.post("/categories", data)
    return result.data
}