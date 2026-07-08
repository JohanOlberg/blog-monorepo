import { httpClient } from "../../../shared/api/http-client";

export async function getUser(){
    const result = await httpClient.get(`/users`)
    return result.data
}