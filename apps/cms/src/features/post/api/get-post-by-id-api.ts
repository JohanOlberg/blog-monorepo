import { httpClient } from "../../../shared/api/http-client";

export async function getPostById(postId: number){
const result = await httpClient.get(`/posts/${postId}`)
return result.data

}