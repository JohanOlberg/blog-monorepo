
import {useAuthStore} from "../store/auth.store" 



export function useLogin(){
    const setAuthLogout = useAuthStore(state => state.logout)
    return setAuthLogout
}