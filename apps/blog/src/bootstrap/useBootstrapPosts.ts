/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from 'react'
import {usePostsStore, type PostsStore} from '@blog/store'
import {getAllPosts} from '@blog/mock-data'


export function useHydratePosts(){
    const hydrated = usePostsStore((state: PostsStore)=> state.isHydrated)
    const hydratePosts = usePostsStore((state: PostsStore)=> state.hydratePosts)

    useEffect(()=>{
        if (hydrated) return

        
        async function readPosts(){
            const posts = await getAllPosts()
            hydratePosts(posts)
        }
        readPosts()
    }, [hydrated, hydratePosts])
    
}
