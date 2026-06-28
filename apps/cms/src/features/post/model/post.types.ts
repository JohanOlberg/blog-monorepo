import type { Author } from "../../author/model/author.types";

export type Category = {
  id: number;
  title: string;
  color: string | null;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
};

export type PostListItem = {
  title: string;
  id: number;
  status: string;
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

export type PostEditorForm = {
  id: number;
  title: string;
  description: string;
  content: string;
  slug: string;
  status: string;
  author: Author;
  category: Category;
  publishedAt: string | null;
};

export type PostUpdate = {
  id: number;
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