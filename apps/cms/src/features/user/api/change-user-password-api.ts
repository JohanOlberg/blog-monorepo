import { httpClient } from "../../../shared/api/http-client";
import type { ChangeUserPasswordInput } from "../model/user.types";

export async function changeUserPassword(input: ChangeUserPasswordInput) {
  const response = await httpClient.patch(
    `/users/${input.userId}/password`,
    {
      password: input.password, 
    }
  );
  
  return response.data; 
}