import { httpClient } from "../../../shared/api/http-client";
import type { PostCreateInput } from "../model/post.types";

export async function createPost(data:PostCreateInput){
    console.log(data)
    const result = await httpClient.post("/posts",data)
    return result.data
}