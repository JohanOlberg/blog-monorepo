import { CategorySelector } from "../../category/ui/CategorySelector";
import { PostCreateStatus } from "./PostCreateStatus";
import "./PostCreateControls.css";

export function PostCreateControls() {
  return (
    <section className="post-create-controls">
      <CategorySelector />
    
      <PostCreateStatus isPostSaved={false} canPublish={false} />
    </section>
  );
}
