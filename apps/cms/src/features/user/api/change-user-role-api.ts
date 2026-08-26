import { httpClient } from "../../../shared/api/http-client";
import type { ChangeUserRoleInput } from "../model/user.types";

export async function changeUserRole(input: ChangeUserRoleInput) {
  const response = await httpClient.patch(
    `/users/${input.userId}/role`,
    {
      role: input.role, 
    }
  );
  
  return response.data; 
}