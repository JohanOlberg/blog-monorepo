import { useQuery } from "@tanstack/react-query";
import { getCategoriesList } from "../api/get-categories-list-api";
import {type CategoriesList} from "../model/public-categorie";
 
export function useCategories (){
  const { data, isLoading, isError, error } = useQuery<CategoriesList[]>({
    queryKey: ["categories"],
    queryFn: getCategoriesList,
    staleTime: 1000 * 60 * 5, 
    gcTime: 1000 * 60 * 10, 
    refetchOnWindowFocus: false
});
    return { data, isLoading, isError, error }
}