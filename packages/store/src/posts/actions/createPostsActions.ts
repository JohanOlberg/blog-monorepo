import { type StateCreator } from "zustand";
import { type PostsStore } from '../types/postTypes'
import { Post } from "../../../../domain/src/post";

export const createPostsActions: StateCreator<
  PostsStore,
  [],
  [],
  Pick<PostsStore, 'hydratePosts' | 'likePost'| 'postUpdate' | 'createPost' | 'archivePost'>
> = (set) => ({
    hydratePosts: (newPosts) =>
      set({
        posts: newPosts,
        isHydrated: true,
      }),
    
    likePost: (postId) =>
      //aqui eu uso o state pois preciso saber do estado anterior
      set((state) => ({
        posts: state.posts.map((post) =>
          post.id === postId
            ? { ...post, likes: (post.likes ?? 0) + 1 }
            : post
        ),
      })),
      postUpdate: (updatePost) => 
      set((state) => ({
        posts: state.posts.map((post)=>
          post.id === updatePost.id
          ?{...post,...updatePost}
          :post
          )
      })),
      createPost: (newPost:Post) => 
      set((state) => ({
        posts: [...state.posts, newPost]
      })),
      archivePost: (postId) => 
        set((state) => ({
          posts: state.posts.map(post=> post.id === postId
            ?{...post, status: "archived"}
            :post
          )
        }))
})