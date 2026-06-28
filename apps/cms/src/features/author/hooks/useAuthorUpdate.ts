import {  useMutation, useQueryClient  } from "@tanstack/react-query";
import { updateAuthor } from "../api/update-author-api";
import type { AuthorUpdate } from "../model/author.types";

export function useAuthorUpdate(authorId: number){
    const queryClient = useQueryClient();

    const { mutate, isPending, isError, error } = useMutation({
        
        mutationFn: (data: AuthorUpdate) => updateAuthor(authorId, data),
    
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["author"] });
          queryClient.invalidateQueries({ queryKey: ["author", authorId] });
        },
       
      });
    
      return { mutate, isPending, isError, error } ;

}