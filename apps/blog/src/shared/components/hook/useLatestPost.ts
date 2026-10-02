import { useQuery } from "@tanstack/react-query";
import { getLatestPosts } from "../api/getPostLastet";

export function useLatestPost() {
  return useQuery({
    queryKey: ["posts", "latest"],
    queryFn: async () => {
      const posts = await getLatestPosts();

      return posts[0];
    },
    staleTime: 5 * 60 * 1000,
  });
}