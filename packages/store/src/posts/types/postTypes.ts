import { Post } from "@blog/domain"

export type PostsState = {
  posts: Post[]
  isHydrated: boolean
}

export type PostActions = {
    hydratePosts: (newPosts: Post[]) => void
    likePost: (postId: string) => void
    //update
    postUpdate: (updatePost:Partial<Post> & { id: string }) => void 
    //create
    createPost: (newPost: Post) => void
    //delete vai ser so alterar o status para inacecivel ou algo do tipo
    archivePost: (postId: string) => void

}

export type PostsStore = PostsState & PostActions