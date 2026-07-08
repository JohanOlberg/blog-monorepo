import {  useMutation, useQueryClient  } from "@tanstack/react-query";
import type { AuthorCreateInput } from "../model/author.types";
import { createAuthor } from "../api/create-author-api";

export function useAuthorCreate(){
    const queryClient = useQueryClient();

    const { mutate, isPending, isError, error, reset } = useMutation({
        
        mutationFn: (data: AuthorCreateInput) => createAuthor(data),
    
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["authors"] });
        },
       
      });
    
      return { mutate, isPending, isError, error, reset } ;

}