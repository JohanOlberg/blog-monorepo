import { useQuery } from "@tanstack/react-query";
import { getUserRoles } from "../api/list-roles-user-api.js"
import { type UserRoleOption } from "../model/user.types.js"

export function useListRoles (){
  const { data, isLoading, isError, error } = useQuery<UserRoleOption[]>({
    queryKey: ["roles"],
    queryFn: getUserRoles,
    staleTime: 1000 * 60 * 5, 
    gcTime: 1000 * 60 * 10, 
    refetchOnWindowFocus: false
});
     return { data, isLoading, isError, error }
}