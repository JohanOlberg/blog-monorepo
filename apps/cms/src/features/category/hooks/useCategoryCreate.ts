import {  useMutation, useQueryClient  } from "@tanstack/react-query";
import type { categoryCreateInput } from "../model/category.types";
import { createCategory } from "../api/create-category-api";

export function useCategoryCreate(){
    const queryClient = useQueryClient();

    const { mutate, isPending, isError, error, reset } = useMutation({
        
        mutationFn: (data: categoryCreateInput) => createCategory(data),
    
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["authors"] });
        },
       
      });
    
      return { mutate, isPending, isError, error, reset } ;

}