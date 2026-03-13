import {usePostsStore} from '@blog/store'
import { type PostsStore} from '../types/postTypes'

export function usePostById(id:string){
    const postById = usePostsStore((state) => state.posts.find(post => post.id === id))
   
    return postById
}
