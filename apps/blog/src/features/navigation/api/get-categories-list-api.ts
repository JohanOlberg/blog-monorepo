import { httpClient } from "../../../shared/api/http-client";

export async function getCategoriesList(){
    const result = await httpClient.get("categories")
    return result.data
}