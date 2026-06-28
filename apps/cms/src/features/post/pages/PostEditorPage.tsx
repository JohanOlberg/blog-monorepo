/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { usePostById } from "../hooks/usePostById";
import { PostEditorContext } from "../context/PostEditorContext";
import type { PostEditorForm, PostUpdate } from "../model/post.types";
import type { PostListItem } from "../model/post.types";
import { PostEditorMetadataForm } from "../ui/PostMetadataForm";
import { PostContentEditor } from "../ui/PostContentEditor";
import "./PostEditorPage.css";
import PostEditControlsSimple from "../ui/PostEditControls";
import { usePostUpdate } from "../hooks/usePostUpdate";
import { PostReadingPreview } from "../ui/ComponentePreviewBlog";

function toPostEditorForm(post: PostListItem): PostEditorForm {
  return {
    id: post.id,
    title: post.title,
    description: post.description,
    content: post.content ?? "",
    slug: post.slug,
    status: post.status,
    author: post.author,
    category: post.category,
    publishedAt: post.publishedAt,
  };
}

export function PostEditorPage() {
  const { postId } = useParams();
  const parsedPostId = Number(postId);
  const result = usePostById(parsedPostId);

  if (!postId || Number.isNaN(parsedPostId)) {
    return <p>ID inválido.</p>;
  }

  if (result.isLoading) {
    return <p>Carregando...</p>;
  }

  if (result.isError) {
    return <p>Erro ao carregar post.</p>;
  }

  if (!result.data) {
    return <p>Post não encontrado.</p>;
  }

  return <PostEditorLoaded post={result.data} />;
}

function PostEditorLoaded({ post }: { post: PostListItem }) {
  const [form, setForm] = useState<PostEditorForm>(() =>
    toPostEditorForm(post)
  );

  const [modalAberto, setModalAberto] = useState(false);
  const { mutate, isPending } = usePostUpdate(Number(post.id));

  function handleSave(dataForm: PostUpdate) {
    const postMainContentUpdate = {
      id: dataForm.id,
      title: dataForm.title,
      description: dataForm.description,
      content: dataForm.content ?? "",
      slug: dataForm.slug,
    };

    mutate(postMainContentUpdate);
  }

  function updateField<K extends keyof PostEditorForm>(
    field: K,
    value: PostEditorForm[K]
  ) {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));
  }

  return (
    <PostEditorContext.Provider value={{ form, updateField }}>
      <main className="post-editor-page">
        <section className="post-editor-shell">
          <header className="post-editor-header">
            <div>
              <span className="post-editor-label">CMS Editor</span>
              <h1>Edit post</h1>
              <p>
                Update the post metadata, content and publishing information.
              </p>
            </div>


          </header>

          <PostEditControlsSimple 
          postId={post.id}
          currentCategory={post.category}
          currentAuthor={post.author}
          />

          <section className="post-editor-main-grid">
            <PostEditorMetadataForm />
            <PostContentEditor />
          </section>
                      <div className="post-editor-actions">
              <button
                onClick={() => setModalAberto(true)}
                className="post-editor-button secondary"
                type="button"
              >
                Preview
              </button>

              {modalAberto && (
                <div
                  className="blog-preview-modal-overlay"
                  onClick={() => setModalAberto(false)}
                >
                  <div
                    className="blog-preview-modal-content"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <div className="blog-preview-actions">
                      <Link to={`/admin/posts/${form.id}/edit`}>
                        <button className="blog-preview-action-button blog-preview-action-button--edit">
                          Save and Exit
                        </button>
                      </Link>
                       <Link to={`/admin/posts/${form.id}/edit`}>
                        <button className="blog-preview-action-button blog-preview-action-button--edit">
                          Save
                        </button>
                      </Link>
                      <button
                        className="blog-preview-action-button blog-preview-action-button--close"
                        onClick={() => setModalAberto(false)}
                        type="button"
                      >
                        Close ×
                      </button>
                    </div>
                    <PostReadingPreview post = {form}/>
                  </div>
                </div>
              )}

              <button
                className="post-editor-button primary"
                onClick={() => handleSave(form)}
                disabled={isPending}
                type="button"
              >
                {isPending ? "Saving..." : "Save changes"}
              </button>
            </div>
        </section>
        
      </main>
    </PostEditorContext.Provider>
  );
}
