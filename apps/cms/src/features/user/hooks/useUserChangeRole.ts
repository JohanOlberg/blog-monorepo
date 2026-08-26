import {  useMutation, useQueryClient  } from "@tanstack/react-query";
import { changeUserRole } from "../api/change-user-role-api";
import {type ChangeUserRoleInput  } from "../model/user.types";

export function useUserChangeRole(){
    const queryClient = useQueryClient();
        
      const { mutate, isPending, isError, error } = useMutation({
        mutationFn: ({userId, role}: ChangeUserRoleInput) => changeUserRole({userId, role}),
    
        onSuccess: (_, variables) => {
          queryClient.invalidateQueries({ queryKey: ["users"] });
          queryClient.invalidateQueries({ queryKey: ["users",variables.userId] });
        },
      });
    
      return { mutate, isPending, isError, error } ;
}