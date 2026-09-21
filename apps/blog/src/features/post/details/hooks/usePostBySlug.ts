import { useQuery } from "@tanstack/react-query";
import { getPostBySlug } from "../api/get-post-by-slug";
import {type  PublicPostDetail } from "../viewmodel/public-post-detail";
 
export function usePostsBySlug (postSlug:string | null){
  const { data, isLoading, isError, error } = useQuery<PublicPostDetail>({
    queryKey: ["posts", postSlug],
    queryFn:  () => getPostBySlug(postSlug!),
    staleTime: 1000 * 60 * 5, 
    gcTime: 1000 * 60 * 10, 
    refetchOnWindowFocus: false
});
    return { data, isLoading, isError, error }
}