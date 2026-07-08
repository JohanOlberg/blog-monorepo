import {  useMutation, useQueryClient  } from "@tanstack/react-query";
import { updateAuthor } from "../api/update-author-api";
import type { AuthorUpdate } from "../model/author.types";

export function useAuthorUpdate(authorId?: number){
    const queryClient = useQueryClient();

   
    const { mutate, isPending, isError, error } = useMutation({
      
       mutationFn: (data: AuthorUpdate) => {
      if (!authorId) {
        throw new Error("Author id is required");
      }

      return updateAuthor(authorId, data);
    },
  
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["authors"] });
        queryClient.invalidateQueries({ queryKey: ["authors", authorId] });
      },
       
    });
    
      return { mutate, isPending, isError, error } ;

}