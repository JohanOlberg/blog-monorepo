import { usePostListed } from "./usePostList";
import { toPostViewModel } from "../mappers/post.mapper";

export function usePostListViewModel() {
  const posts = usePostListed();
  return posts.map(toPostViewModel);
}