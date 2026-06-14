import { httpClient } from "../../../shared/api/http-client";

export async function getCategory(){
    const result = await httpClient.get(`/categories`)
    return result.data
}