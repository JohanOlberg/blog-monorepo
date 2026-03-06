import { usePostList } from "./usePostList";
import { toPostViewModel } from "../model/post.mapper";

export function usePostListViewModel() {
  const posts = usePostList();
  return posts.map(toPostViewModel);
}