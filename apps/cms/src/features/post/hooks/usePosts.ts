import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/post-api";
import {type  PostListItem } from "../model/post.types";
 
export function usePosts (){
  const { data, isLoading, isError, error } = useQuery<PostListItem[]>({
    queryKey: ["posts"],
    queryFn: getPosts,
    staleTime: 1000 * 60 * 5, 
    gcTime: 1000 * 60 * 10, 
    refetchOnWindowFocus: false
});

return { data, isLoading, isError, error }
}