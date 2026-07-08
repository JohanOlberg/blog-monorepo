import {  useMutation, useQueryClient  } from "@tanstack/react-query";
import { updateUser } from "../api/update-user-api";
import type { userUpdateInput } from "../model/user.types";

export function useUserUpdate(userId: number){
    const queryClient = useQueryClient();

    const { mutate, isPending, isError, error } = useMutation({
        
        mutationFn: (data: userUpdateInput) => updateUser(userId, data),
    
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["users"] });
          queryClient.invalidateQueries({ queryKey: ["users", userId] });
        },
       
      });
    
      return { mutate, isPending, isError, error } ;

}