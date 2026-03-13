import type { Post } from "@blog/domain"
import {usePostsStore} from '@blog/store'


export function usePostById(id:string):Post|undefined{
     const posts = usePostsStore((state) => state.posts)
     const post = posts.find(post => post.id === id)
     return post
}
