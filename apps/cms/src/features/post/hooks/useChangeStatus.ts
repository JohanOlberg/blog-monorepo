import {  useMutation, useQueryClient  } from "@tanstack/react-query";
import { publishPost, movePostToDraft, archivedPost } from "../api/change-status-api";


type ChangeStatus = 
| "DRAFT"
| "PUBLISHED"
| "ARCHIVED"

type ChangePostStatusInput = {
    postId: number;
    status: ChangeStatus;
}

const mapActionStatus: Record<ChangeStatus,(id:number)=>Promise<unknown>>={
    PUBLISHED:(id:number)=> publishPost(id),
    DRAFT:(id:number)=> movePostToDraft(id),
    ARCHIVED:(id:number)=> archivedPost(id),
}

export function useChangePostStatus(){

    const queryClient = useQueryClient();
    
    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: ({ postId, status }:ChangePostStatusInput) => mapActionStatus[status](postId),
        onSuccess: (_, variables) => {
        queryClient.invalidateQueries({ queryKey: ["posts"] });
        queryClient.invalidateQueries({ queryKey: ["posts", variables.postId] });
      },
    });
  return { mutate, isPending, isError, error } ;

}