import { create } from 'zustand'
import {type Post} from '@blog/domain'

type PostsState = {
    posts:Post[],
     hydrate:boolean,
    hydratePosts:(newPosts:Post[])=>void,
    likePost:(postId:string)=>void

}

export const usePostsStore = create<PostsState>((set) => ({
  posts:[],
   hydrate:false,
  hydratePosts: (newPosts:Post[]) => set({posts: newPosts,  hydrate: true }),
likePost: (postId: string) =>
    set((state) => ({
      posts: state.posts.map(post =>
        post.id === postId ? { ...post, likes: (post.likes || 0) + 1 } : post
      ),
    })),  
}));