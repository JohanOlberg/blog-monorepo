import {  useMutation  } from "@tanstack/react-query";
import {useAuthStore} from "../store/auth.store" 
import type { LoginInput, LoginOutput } from "../model/auth.types";
import { useNavigate } from 'react-router-dom';
import { login } from "../api/auth-api";

export function useLogin(){
    const setAuth = useAuthStore(state => state.setAuth)
    const navigate = useNavigate()
    const { mutate, isPending, isError, error } = useMutation<LoginOutput, Error, LoginInput>({
        mutationFn: (data: LoginInput) => login(data),
    
        onSuccess: (data) => {
          setAuth(data.user, data.accessToken)
          navigate('/admin', {replace:true})
        },
      });
    return { mutate, isPending, isError, error }
}