import "./PostEditControls.css";
import { CategorySelector } from "../../category/ui/CategorySelector";
import { PostStatusWorkflow } from "./PostChangeStatus";
import { AuthorSelector } from "../../author/ui/AuthorSelector";
import type { Category } from "../model/post.types";
import type { Author } from "../../author/model/author.types";

type PostEditControlsSimpleProps = {
  postId: number;
  currentCategory: Category;
  currentAuthor: Author;
};

export default function PostEditControlsSimple({
  postId,
  currentCategory,
  currentAuthor,
}: PostEditControlsSimpleProps) {
  return (
    <section className="post-edit-controls">
      <CategorySelector
        postId={postId}
        currentCategory={currentCategory}
      />

      <AuthorSelector
        postId={postId}
        currentAuthor={currentAuthor}
      />

      <PostStatusWorkflow />
    </section>
  );
}