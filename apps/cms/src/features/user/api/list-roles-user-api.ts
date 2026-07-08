import { httpClient } from "../../../shared/api/http-client";

export async function getUserRoles(){
    const result = await httpClient.get(`/users/roles`)
    return result.data
}