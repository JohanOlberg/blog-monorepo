import {  useMutation, useQueryClient  } from "@tanstack/react-query";
import type { PostCreateInput } from "../model/post.types";
import { createPost } from "../api/create-post-api";

export function usePostCreate(){
    const queryClient = useQueryClient();

    const { mutate, isPending, isError, error, reset } = useMutation({
        
        mutationFn: (data: PostCreateInput) => createPost(data),
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["posts"] });
        },       
      });
    
      return { mutate, isPending, isError, error, reset } ;

}