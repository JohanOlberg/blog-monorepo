import { httpClient } from "../../../shared/api/http-client";

export async function getPosts(){
const result = await httpClient.get("posts")
return result.data

}