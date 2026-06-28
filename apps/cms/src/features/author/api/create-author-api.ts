import { httpClient } from "../../../shared/api/http-client";

export async function createAuthor(){
    const result = await httpClient.post("/authors")
    return result.data
}