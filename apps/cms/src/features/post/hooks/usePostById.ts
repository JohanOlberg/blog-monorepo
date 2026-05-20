import { useQuery } from "@tanstack/react-query";
import { getPostById } from "../api/get-post-by-id-api";
import {type  PostListItem } from "../model/post.types";
 
export function usePostById (postId:number){
  
  const { data, isLoading, isError, error } = useQuery<PostListItem>({
    queryKey: ["posts", postId],
    queryFn: () => getPostById(postId),
    staleTime: 1000 * 60 * 5, 
    gcTime: 1000 * 60 * 10, 
    refetchOnWindowFocus: false
});

return { data, isLoading, isError, error }
}