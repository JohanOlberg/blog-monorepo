import {  useMutation, useQueryClient  } from "@tanstack/react-query";
import { updateCategory } from "../api/update-category-api";
import type { categoryUpdate } from "../model/category.types";

export function useCategoryUpdate(categoryId: number){
    const queryClient = useQueryClient();

    const { mutate, isPending, isError, error } = useMutation({
        
        mutationFn: (data: categoryUpdate) => updateCategory(categoryId, data),
    
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["categories"] });
          queryClient.invalidateQueries({ queryKey: ["categories", categoryId] });
        },
       
      });
    
      return { mutate, isPending, isError, error } ;

}