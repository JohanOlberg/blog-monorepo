import type { Author } from "../../author/model/author.types";

export type Category = {
  id: number;
  title: string;
  color: string | null;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
};
export type PostStatus = "DRAFT" | "PUBLISHED" | "ARCHIVED"

export type PostListItem = {
  title: string;
  id: number;
  status: PostStatus;
  slug: string;
  description: string;
  category: Category;
  content: string;
  author: Author;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  archivedAt: string | null;
};

export type PostFormState = {
  id: number | null;
  title: string;
  description: string;
  content: string;
  slug: string;
  status: PostStatus;
  author: Author | null;
  category: Category | null;
  publishedAt: string | null;
};

export type PostCreateForm = PostFormState;

export type PostEditorForm = PostFormState;

export type PostCreateInput = {
  title: string;
  description: string;
  content: string;
  slug: string;
  authorId: number;
  categoryId: number;
};

export type PostUpdate = {
  id: number | null;
  title: string;
  description: string;
  content: string;
  slug: string;
};

export type ChangeAuthorInput = {
  postId: number;
  authorId: number;
};

export type ChangeCategoryInput = {
  postId: number;
  categoryId: number;
};