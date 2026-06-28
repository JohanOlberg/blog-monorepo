import { httpClient } from "../../../shared/api/http-client";
import { type ChangeCategoryInput } from "../model/post.types";


export async function changeCategory(input: ChangeCategoryInput) {
    const response = await httpClient.patch(
    `/posts/${input.postId}/category`,
    {
      categoryId: input.categoryId,
    }
  );

  return response.data;
}