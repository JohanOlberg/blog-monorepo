import {  useMutation, useQueryClient  } from "@tanstack/react-query";
import type { userCreateInput } from "../model/user.types";
import { createUser } from "../api/create-user-api";

export function useUserCreate(){
    const queryClient = useQueryClient();

    const { mutate, isPending, isError, error, reset } = useMutation({
        
        mutationFn: (data: userCreateInput) => createUser(data),
    
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["users"] });
        },
       
      });
    
      return { mutate, isPending, isError, error, reset } ;

}