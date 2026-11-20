import { useQuery } from "@tanstack/react-query";
import { getLatestPosts } from "../api/getPostLastet";

export function useLatestPost(currentSlug?: string) {
  return useQuery({
    queryKey: ["footer", "latest-posts"],
    queryFn: getLatestPosts,
    select: (posts) => posts.find((post) => post.slug !== currentSlug) ?? posts[0],
    staleTime: 5 * 60 * 1000,
  });
}
