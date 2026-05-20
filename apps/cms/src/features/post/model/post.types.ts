export type PostListItem  = {
    title: string;
    id: number;
    status: string;
    slug: string;
    description: string;
    categoryId: number;
    content: string;
    authorId: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string | null;
    archivedAt: string | null;
};

export type PostEditorForm = {
  id:number;
  title: string;
  description: string;
  content: string;
  slug: string;
  status: string;
  authorId: number;
  categoryId: number;
  publishedAt: string | null;
};

export type PostUpdate = {
  id:number;
  title: string;
  description: string;
  content: string;
  slug:string
};