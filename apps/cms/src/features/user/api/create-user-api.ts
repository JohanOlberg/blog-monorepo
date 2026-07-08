import { httpClient } from "../../../shared/api/http-client";
import type { userCreateInput } from "../model/user.types";

export async function createUser(data: userCreateInput){
    const result = await httpClient.post("/users", data)
    return result.data
}