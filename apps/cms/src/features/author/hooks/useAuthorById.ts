import { useQuery } from "@tanstack/react-query";
import { getAuthorById } from "../api/get-author-by-id-api.js"
import { type Author } from "../model/author.types.js"

export function useAuthorById(authorId:number){
  
    const { data, isLoading, isError, error } = useQuery<Author>({
        queryKey: ["author", authorId],
        queryFn: () => getAuthorById(authorId),
        staleTime: 1000 * 60 * 5, 
        gcTime: 1000 * 60 * 10, 
        refetchOnWindowFocus: false
    });

return { data, isLoading, isError, error }

}