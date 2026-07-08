import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../api/get-user-by-id-api.js"
import { type User } from "../model/user.types.js"

export function useUserById(userId:number){
  
    const { data, isLoading, isError, error } = useQuery<User>({
        queryKey: ["users", userId],
        queryFn: () => getUserById(userId),
        staleTime: 1000 * 60 * 5, 
        gcTime: 1000 * 60 * 10, 
        refetchOnWindowFocus: false
    });

return { data, isLoading, isError, error }

}