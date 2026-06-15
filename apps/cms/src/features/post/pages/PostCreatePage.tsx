
import { PostCreateControls } from "../ui/PostCreateControls";
import "./PostCreatePage.css";

export function CreatePostPage() {
  //const isPostSaved = false;

  return (
    <main className="create-post-page">
      <header className="create-post-header">
        <div>
          <span>CMS / Create Post</span>
          <h1>Create New Post</h1>
          <p>Start as draft. Save the post before publishing.</p>
        </div>

        <button className="save-post-button">Save draft</button>
      </header>

      <PostCreateControls/>

      <section className="post-editor-grid">
        <aside className="metadata-panel">
          <label>
            Title
            <input placeholder="Post title" />
          </label>

          <label>
            Slug
            <input placeholder="generated-from-title" />
          </label>

          <label>
            Description
            <textarea placeholder="Short post description" />
          </label>
        </aside>

        <section className="content-panel">
          <label>
            Content
            <textarea placeholder="Write your post content here..." />
          </label>
        </section>
      </section>
    </main>
  );
}