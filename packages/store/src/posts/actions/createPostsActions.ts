import { type StateCreator } from "zustand";
import { type PostsStore } from '../types/postTypes'
import {type Post } from "../../../../domain/src/post";

export const createPostsActions: StateCreator<
  PostsStore,
  [],
  [],
  Pick<PostsStore, 'hydratePosts' >
> = (set) => ({
    hydratePosts: (newPosts) =>
      set({
        posts: newPosts,
        isHydrated: true,
      }),
    

})