import {  useMutation, useQueryClient  } from "@tanstack/react-query";
import { updatePost } from "../api/update-post-api";
import {type  PostUpdate } from "../model/post.types";

export function usePostUpdate(postId: number) {
  const queryClient = useQueryClient();
    
  const mutation = useMutation({
    mutationFn: (data: PostUpdate) => updatePost(postId, data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["posts", postId] });
    },
  });

  return mutation;
}   