import { useQuery } from "@tanstack/react-query";
import { getPostById } from "../api/get-post-by-id";
import {type  PublicPostDetail } from "../viewmodel/public-post-detail";
 
export function usePostsById (postId:number | null){
  const { data, isLoading, isError, error } = useQuery<PublicPostDetail>({
    queryKey: ["posts", postId],
    queryFn:  () => getPostById(postId!),
    staleTime: 1000 * 60 * 5, 
    gcTime: 1000 * 60 * 10, 
    refetchOnWindowFocus: false
});
    return { data, isLoading, isError, error }
}