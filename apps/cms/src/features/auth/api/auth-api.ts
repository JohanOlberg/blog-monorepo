import type { LoginInput, LoginOutput } from "../model/auth.types";
import { httpClient } from "../../../shared/api/http-client";


export async function login(input: LoginInput): Promise<LoginOutput>{
    const result = await httpClient.post(`/login`,input)
    return result.data
}