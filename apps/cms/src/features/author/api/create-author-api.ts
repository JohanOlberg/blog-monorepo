import { httpClient } from "../../../shared/api/http-client";
import type { AuthorCreateInput } from "../model/author.types";

export async function createAuthor(data:AuthorCreateInput){
    const result = await httpClient.post("/authors",data)
    return result.data
}