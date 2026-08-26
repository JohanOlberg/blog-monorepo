import {  useMutation, useQueryClient  } from "@tanstack/react-query";
import { changeUserPassword } from "../api/change-user-password-api";
import {type ChangeUserPasswordInput  } from "../model/user.types";

export function useUserChangePassword(){
    const queryClient = useQueryClient();
        
      const { mutate, isPending, isError, error } = useMutation({
        mutationFn: ({userId, password}: ChangeUserPasswordInput) => changeUserPassword({userId, password}),
    
        onSuccess: (_, variables) => {
          queryClient.invalidateQueries({ queryKey: ["users"] });
          queryClient.invalidateQueries({ queryKey: ["users",variables.userId] });
        },
      });
    
      return { mutate, isPending, isError, error } ;
}