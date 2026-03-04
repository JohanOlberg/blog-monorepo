import {type Post} from '@blog/domain'
import {type PostViewModel } from './post.viewModel'

export function toPostViewModel(post: Post): PostViewModel {
  return {
    id: post.id,
    title: post.title,
    description: post.description,
    author: post.author,
    formattedDate: post.date
  };
}
