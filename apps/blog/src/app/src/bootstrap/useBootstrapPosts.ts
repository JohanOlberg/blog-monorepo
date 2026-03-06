/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from 'react'
import {usePostsStore} from '@blog/store'
import {getAllPosts} from '@blog/mock-data'

export function useHydratePosts(){
    const hydrated = usePostsStore((state)=> state.hydrate)
    const hydratePosts = usePostsStore((state)=> state.hydratePosts)

    useEffect(()=>{
        if (hydrated) return

        
        async function readPosts(){
            const posts = await getAllPosts()
            hydratePosts(posts)
        }
        readPosts()
    }, [hydrated, hydratePosts])
    
}
