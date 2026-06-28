import {  useMutation, useQueryClient  } from "@tanstack/react-query";
import { changeCategory } from "../api/change-category-api";
import {type  ChangeCategoryInput } from "../model/post.types";

export function useChangeCategory(){
    const queryClient = useQueryClient();
        
      const { mutate, isPending, isError, error } = useMutation({
        mutationFn: ({postId, categoryId}: ChangeCategoryInput) => changeCategory({postId, categoryId}),
    
        onSuccess: (_, variables) => {
          queryClient.invalidateQueries({ queryKey: ["posts"] });
          queryClient.invalidateQueries({ queryKey: ["posts",variables.postId] });
        },
      });
    
      return { mutate, isPending, isError, error } ;
}