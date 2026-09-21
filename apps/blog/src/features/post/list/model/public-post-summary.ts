import type { Author } from "../../../../shared/model/author-types";
import type { Category } from "../../../../shared/model/category-types";

export type PostListOutput = {
  title: string;
  id: number;
  slug: string;
  description: string;
  category: Category;
  author: Author;
  publishedAt: string ;
};

export type PostListItem = {
  title: string;
  id: number;
  slug: string;
  description: string;
  category: Category;
  content: string;
  author: Author;
  createdAt: string;
  updatedAt: string;
  publishedAt: string ;
};

export type PostsFilters = {
  search:string | null,
  category:string | null,
  sort:string | null,
}