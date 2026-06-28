import { httpClient } from "../../../shared/api/http-client";
import { type ChangeAuthorInput } from "../model/post.types";

export async function changeAuthor(input: ChangeAuthorInput){
    const response = await httpClient.patch(
    `/posts/${input.postId}/author`,
    {
      authorId: input.authorId,
    }
  );

  return response.data;
}
