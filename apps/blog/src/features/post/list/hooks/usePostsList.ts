import { useQuery } from "@tanstack/react-query";
import { getPostsList } from "../api/get-posts-list-api";
import {type  PostListItem } from "../model/public-post-summary";
 
export function usePosts (){
  const { data, isLoading, isError, error } = useQuery<PostListItem[]>({
    queryKey: ["posts"],
    queryFn: getPostsList,
    staleTime: 1000 * 60 * 5, 
    gcTime: 1000 * 60 * 10, 
    refetchOnWindowFocus: false
});
    return { data, isLoading, isError, error }
}