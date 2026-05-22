
import { httpClient } from "../../../shared/api/http-client";

export async function publishPost(postId: number) {
    const response = await httpClient.patch(`/posts/${postId}/publish`);
    return response.data; 
}

export async function movePostToDraft(postId: number) {
    const response = await httpClient.patch(`/posts/${postId}/draft`);
    return response.data; 
}
export async function archivedPost(postId: number) {
    const response = await httpClient.patch(`/posts/${postId}/archive`);
    return response.data; 
}