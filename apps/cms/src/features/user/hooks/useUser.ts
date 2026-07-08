import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/list-users-api.js"
import { type User } from "../model/user.types.js"

export function useUser (){
  const { data, isLoading, isError, error } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: getUser,
    staleTime: 1000 * 60 * 5, 
    gcTime: 1000 * 60 * 10, 
    refetchOnWindowFocus: false
});
     return { data, isLoading, isError, error }
}