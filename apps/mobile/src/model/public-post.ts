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

export type Category = {
  id: number;
  title: string;
  color: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
};

export type AuthorStatus = "ACTIVE" | "INACTIVE" | "BLOCKED";

export type Author = {
  id: number;
  name: string;
  bio: string | null;
  avatarUrl: string | null;
  userId: number;
  status: AuthorStatus;
  email: string;
  updatedAt:string
};