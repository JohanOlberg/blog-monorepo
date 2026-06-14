
import { CategorySelector } from "../../category/ui/CategorySelector";
import { PostChangeAuthor } from "../ui/PostChangeAuthor";
import "./PostCreatePage.css";

export function CreatePostPage() {
  const isPostSaved = false;

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

      <section className="post-controls-grid">
        <CategorySelector  />

        <PostChangeAuthor />

        <article className="control-card">
          <div className="control-header">
            <span>Status</span>
            <h2>Draft</h2>
          </div>

          <div className="status-draft-box">
            <span className="status-label">Current</span>
            <strong>Draft</strong>
            <small>This post must be saved before it can be published.</small>
          </div>

          <button
            className="publish-button"
            disabled={!isPostSaved}
          >
            {isPostSaved ? "Publish post" : "Save before publishing"}
          </button>
        </article>
      </section>

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