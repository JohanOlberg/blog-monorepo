type Status = "DRAFT" | "PUBLISHED" | "ARCHIVED";

type PostContentInput = {
  image?: string | undefined;
  text?: string | undefined;
};

export type CreatePostInput = {
  title: string;
  description: string;
  slug: string;
  categoryId: number;
  content?: PostContentInput | undefined;
  authorId: number;
};
export type UpdatePostInput = {
  title: string;
  description: string;
  slug: string;
  categoryId: number;
  content?: PostContentInput ;
  authorId: number;
  updatedAt: Date;
  status: Status;
};

export type PostsListInput = {
  title: string;
  id: number;
  status: Status;
  slug: string;
  description: string;
  categoryId: number;
  content: {
    image: string;
    text: string;
  };
  authorId: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date | null;
  archivedAt: Date | null;
};