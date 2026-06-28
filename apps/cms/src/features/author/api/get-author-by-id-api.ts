import { httpClient } from "../../../shared/api/http-client";

export async function getAuthorById(authorId: number){
    const result = await httpClient.get(`/authors/${authorId}`)
    return result.data
}