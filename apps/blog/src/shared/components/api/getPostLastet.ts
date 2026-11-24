import { httpClient } from "../../api/http-client";
import type { PostListOutput } from "../../../features/post/list/model/public-post-summary";

export async function getLatestPosts(): Promise<PostListOutput[]> {
  const result = await httpClient.get<PostListOutput[]>("public/posts", {
    params: { sort: "latest" },
  });
  return result.data;
}
