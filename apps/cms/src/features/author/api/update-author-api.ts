import { httpClient } from "../../../shared/api/http-client";
import type { AuthorUpdate } from "../model/author.types.js";

export async function updateAuthor(authorId: number, data:AuthorUpdate){
     console.log(data)
    const result = await httpClient.put(`/authors/${authorId}`, data)
    return result.data
}