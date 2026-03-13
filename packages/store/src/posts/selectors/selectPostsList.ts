import {usePostsStore} from '@blog/store'


export function usePostList(){
    const posts = usePostsStore((state) => state.posts)
    return posts     
 }




