import { httpClient } from "../../../shared/api/http-client";
import { type ChangeAuthor } from "../model/post.types";

export async function ChangeAuthor(postId: number, data: ChangeAuthor){
    const response = await httpClient.put(`/posts/${postId}`, data);
    return response.data; 
}
