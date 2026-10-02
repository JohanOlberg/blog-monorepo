import { httpClient } from "../../api/http-client";

export async function getLatestPosts(){
const result = await httpClient.get(`public/posts`)
return result.data

}