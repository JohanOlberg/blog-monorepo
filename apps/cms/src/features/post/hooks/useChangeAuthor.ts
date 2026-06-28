import {  useMutation, useQueryClient  } from "@tanstack/react-query";
import { changeAuthor } from "../api/change-author-api";
import { type ChangeAuthorInput } from "../model/post.types";

export function useChangeAuthor(){
    const queryClient = useQueryClient();
        
      const { mutate, isPending, isError, error } = useMutation({
       mutationFn: ({postId, authorId}: ChangeAuthorInput) => changeAuthor({postId, authorId}),
    
        onSuccess: (_, variables) => {
          queryClient.invalidateQueries({ queryKey: ["posts"] });
          queryClient.invalidateQueries({ queryKey: ["posts",variables.postId] });
        },
      });
    
      return { mutate, isPending, isError, error } ;
}