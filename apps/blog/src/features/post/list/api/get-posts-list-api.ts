import { httpClient } from "../../../../shared/api/http-client";

export async function getPostsList(){
    const result = await httpClient.get("public/posts")
    return result.data
}