import type {Category} from "../../../../shared/model/category-types"
import type {Author}  from "../../../../shared/model/author-types"




export type PublicPostImage = {
  url: string;
  alt?: string;
};

export type PublicPostDetail = {
  id: string;

  slug: string;

  title: string;
  description: string;

  /**
   * HTML gerado pelo TipTap.
   */
  content: string;

  publishedAt: string;

  createdAt?: string;
  updatedAt?: string;

  category: Category;
  author: Author;

  /**
   * Pode continuar null no CMS.
   */
  image?: PublicPostImage | null;
};

export type PublicPostSummary = {
  id: string;
  slug: string;

  title: string;
  description?: string;

  publishedAt: string;

  category: Category;

  author: {
    id: string;
    name: string;
  };
};