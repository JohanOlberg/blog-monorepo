import { httpClient } from "../../../shared/api/http-client";
import type { userUpdateInput } from "../model/user.types";

export async function updateUser(userId: number, data:userUpdateInput){
    const result = await httpClient.put(`/users/${userId}`, data)
    return result.data
}