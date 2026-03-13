import {type Post} from '@blog/domain'
import {type PostViewModel } from '../viewmodel/post.view-model'

export function toPostViewModel(post: Post): PostViewModel {
  return {
    id: post.id,
    title: post.title,
    content: post.content,
    author: post.author,
    formattedDate: post.date,
    likes:post.likes,
  };
}
