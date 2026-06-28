import { httpClient } from "../../../shared/api/http-client";

export async function getAuthor(){
    const result = await httpClient.get(`/authors`)
    return result.data
}