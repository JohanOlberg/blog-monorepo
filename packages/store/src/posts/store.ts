import { create } from 'zustand'
import { type PostsStore} from './types/postTypes'
import { initialPostsState } from './state/initialPostState'
import { createPostsActions } from './actions/createPostsActions'




export const usePostsStore = create<PostsStore>()((...args) => ({
  ...initialPostsState,
  ...createPostsActions(...args)
}))
