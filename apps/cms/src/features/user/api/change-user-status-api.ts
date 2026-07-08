
import { httpClient } from "../../../shared/api/http-client";

export async function activateUser(userId: number) {
    const response = await httpClient.patch(`/users/${userId}/activate`);
    return response.data; 
}

export async function deactivateUser(userId: number) {
    const response = await httpClient.patch(`/users/${userId}/deactivate`);
    return response.data; 
}

export async function blockUser(userId: number) {
    const response = await httpClient.patch(`/users/${userId}/block`);
    return response.data; 
}