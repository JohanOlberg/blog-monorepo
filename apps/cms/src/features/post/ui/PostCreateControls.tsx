import { CategorySelector } from "../../category/ui/CategorySelector";
import { PostChangeAuthor } from "./PostChangeAuthor";
import { PostCreateStatus } from "./PostCreateStatus";

export function PostCreateControls(){

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
        <PostCreateStatus isPostSaved={false} canPublish={false} />

    </section>
)
}