import { PostCreateControls } from "../ui/PostCreateControls";
import "./PostCreatePage.css";

export function CreatePostPage() {
  return (
    <main className="post-create-page">
      <header className="post-create-header">
        <div>
          <span className="post-create-header__label">CMS / Create Post</span>
          <h1 className="post-create-header__title">Create New Post</h1>
          <p className="post-create-header__description">
            Start as draft. Save the post before publishing.
          </p>
        </div>

        <button className="post-create-save-button" type="button">
          Save draft
        </button>
      </header>

      <PostCreateControls />

      <section className="post-create-editor-grid">
        <aside className="post-create-metadata-panel">
          <label className="post-create-field">
            Title
            <input placeholder="Post title" />
          </label>

          <label className="post-create-field">
            Slug
            <input placeholder="generated-from-title" />
          </label>

          <label className="post-create-field">
            Description
            <textarea placeholder="Short post description" />
          </label>
        </aside>

        <section className="post-create-content-panel">
          <label className="post-create-field">
            Content
            <textarea placeholder="Write your post content here..." />
          </label>
        </section>
      </section>
    </main>
  );
}
