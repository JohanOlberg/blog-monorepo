import { useQuery } from "@tanstack/react-query";
import { getPostBySlug } from "../api/get-post-by-slug";
import {type  PublicPostDetail } from "../viewmodel/public-post-detail";
import { retryPostRequest } from "../../../../shared/api/request-error";
 
export function usePostsBySlug (postSlug:string | null){
  const { data, isLoading, isError, error, isSuccess, isFetching, refetch } = useQuery<PublicPostDetail>({
    queryKey: ["posts", postSlug],
    queryFn:  () => getPostBySlug(postSlug!),
    enabled: Boolean(postSlug),
    retry: retryPostRequest,
    staleTime: 1000 * 60 * 5, 
    gcTime: 1000 * 60 * 10, 
    refetchOnWindowFocus: false
});
    return { data, isLoading, isError, error, isSuccess, isFetching, refetch }
}
