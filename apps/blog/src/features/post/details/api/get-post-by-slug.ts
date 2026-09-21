import { httpClient } from "../../../../shared/api/http-client";

export async function getPostBySlug(postSlug: string){
const result = await httpClient.get(`/public/posts/${postSlug}`)
return result.data

}