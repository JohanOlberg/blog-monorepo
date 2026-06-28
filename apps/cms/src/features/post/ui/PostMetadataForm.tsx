import { usePostEditorContext } from "../context/PostEditorContext";
import "./PostMetadataForm.css"
import { convertToSlug } from "../../../shared/util/convert-to-slug";


export function PostEditorMetadataForm(){
  const { form, updateField } = usePostEditorContext();
    return (
    <aside className="post-meta-form">
      <header className="post-meta-form-header">
        <span>Post settings</span>
        <h2>Metadata</h2>
      </header>

      <div className="post-form-field">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          value={form.title}
          onChange={(event) => {
            updateField("title", event.target.value); 
            updateField("slug", convertToSlug(event.target.value))}}
        />
      </div>

      <div className="post-form-field">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={form.description}

          onChange={(event) =>
            updateField("description", event.target.value)

          }
        />
      </div>

      <div className="post-form-field">
        <label htmlFor="slug">Slug</label>
        <input
          id="slug"
          value={form.slug}
          onChange={(event) => updateField("slug", event.target.value)}
        />

      </div>

    </aside>
  );
}