import {usePostList} from '@blog/store'

 export function usePostListed(){
    const posts = usePostList()
    return posts     
 }
   
        



