import { httpClient } from "../../../shared/api/http-client";

export async function getUserById(userId: number){
    const result = await httpClient.get(`/users/${userId}`)
    return result.data
}