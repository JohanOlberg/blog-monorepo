/* eslint-disable @typescript-eslint/no-unused-vars */
import {usePostsStore} from '@blog/store'
import type { Post } from '@blog/domain'

 export function usePostList():Post[]{
    const posts = usePostsStore((state) => state.posts)
    return posts     
 }
   
        
export function useGetPostById(id:string):Post|undefined{
    const listPosts = usePostList()
        const post = listPosts.find(post => post.id === id)
        return post
}



