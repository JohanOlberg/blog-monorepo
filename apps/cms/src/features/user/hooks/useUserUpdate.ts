import {  useMutation, useQueryClient  } from "@tanstack/react-query";
import { updateUser } from "../api/update-user-api";
import type { userUpdateInput } from "../model/user.types";

type UpdateUserInput = {
  userId: number;
  data: userUpdateInput;
};

export function useUserUpdate(){
    const queryClient = useQueryClient();

    const { mutate, isPending, isError, error } = useMutation({
        
        mutationFn: ({userId, data}: UpdateUserInput) => updateUser(userId, data),
    
        onSuccess: (_, variables) => {
          queryClient.invalidateQueries({ queryKey: ["users"] });
          queryClient.invalidateQueries({ queryKey: ["users", variables.userId] });
        },
       
      });
    
      return { mutate, isPending, isError, error } ;

}