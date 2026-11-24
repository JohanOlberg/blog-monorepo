import type {
  Author,
  AuthorFormData,
} from "./author.types";

export function createFormFromAuthor(author: Author): AuthorFormData {
  return {
    name: author.name,
    bio: author.bio ?? "",
    avatarUrl: author.avatarUrl ?? "",
    userId: author.userId,
    status: author.status
  };
}
