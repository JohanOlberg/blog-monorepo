import "./PostEditControls.css"
import { CategorySelector } from "../../category/ui/CategorySelector";
import { PostStatusWorkflow } from "./PostChangeStatus";
import { PostChangeAuthor } from "./PostChangeAuthor";

export default function PostEditControlsSimple() {
  return (
    <section className="post-controls">


      {/* =====================================================
        CATEGORY
      ====================================================== */}
        <CategorySelector/>

      {/* =====================================================
        AUTHOR
      ====================================================== */}

      <PostChangeAuthor />

      {/* =====================================================
        STATUS
      ====================================================== */}

       <PostStatusWorkflow  />

    </section>
  );
}
