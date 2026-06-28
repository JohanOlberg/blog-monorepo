import { useQuery } from "@tanstack/react-query";
import { getAuthor } from "../api/author-api.js"
import { type Author } from "../model/author.types.js"

export function useAuthors (){
  const { data, isLoading, isError, error } = useQuery<Author[]>({
    queryKey: ["author"],
    queryFn: getAuthor,
    staleTime: 1000 * 60 * 5, 
    gcTime: 1000 * 60 * 10, 
    refetchOnWindowFocus: false
});
     return { data, isLoading, isError, error }
}