import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../api/category-api.js"
import { type Category } from "../model/category.types.js"

export function useCategory (){
  const { data, isLoading, isError, error } = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: getCategory,
    staleTime: 1000 * 60 * 5, 
    gcTime: 1000 * 60 * 10, 
    refetchOnWindowFocus: false
});
     return { data, isLoading, isError, error }
}