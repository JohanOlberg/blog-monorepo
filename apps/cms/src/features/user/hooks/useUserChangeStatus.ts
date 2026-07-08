import {  useMutation, useQueryClient  } from "@tanstack/react-query";
import { activateUser, blockUser, deactivateUser } from "../api/change-user-status-api";

type ChangeStatus = 
| "ACTIVE"
| "BLOCKED"
| "INACTIVE"

type ChangeUserStatusInput = {
    selectedUserId: number;
    status: ChangeStatus;
}

const mapActionStatus: Record<ChangeStatus,(id:number)=>Promise<unknown>>={
    ACTIVE:(id:number)=> activateUser(id),
    BLOCKED:(id:number)=> blockUser(id),
    INACTIVE:(id:number)=> deactivateUser(id),
}

export function useChangeUserStatus(){

    const queryClient = useQueryClient();
    
    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: ({ selectedUserId, status }:ChangeUserStatusInput) => mapActionStatus[status](selectedUserId),
        onSuccess: (_, variables) => {
        queryClient.invalidateQueries({ queryKey: ["users"] });
        queryClient.invalidateQueries({ queryKey: ["users", variables.selectedUserId] });
      },
    });
  return { mutate, isPending, isError, error } ;

}