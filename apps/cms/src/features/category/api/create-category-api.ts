import { httpClient } from "../../../shared/api/http-client";

export async function createCategory(){
    const result = await httpClient.post("/categories")
    return result.data
}