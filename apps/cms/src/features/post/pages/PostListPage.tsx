import { Link } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";
import "./PostListPage.css";
import { PostReadingPreview } from "../ui/ComponentePreviewBlog";
import { useState } from "react";
//import type { PostEditorForm } from "../model/post.types";
import { usePostById } from "../hooks/usePostById";

export function PostListPage() {
  const result = usePosts();
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const postPreviewQuery  = usePostById(selectedPostId)
  if (result.isLoading) return <p>Carregando...</p>;
  if (result.isError) {
    return (
      <p>
        Erro:{" "}
        {result.error instanceof Error
          ? result.error.message
          : "Desconhecido"}
      </p>
    );
  }

  return (
    <main className="post-list-page">
      <section className="post-list-shell">
        <header className="post-list-header">
          <div>
            <span className="post-list-label">CMS Content</span>
            <h1>Posts</h1>
            <p>Gerencie, visualize e acompanhe todos os posts cadastrados no CMS.</p>
          </div>

          <div className="post-list-header-actions">
            <button className="post-list-button">Filtrar</button>
            <Link to="/admin/posts/new">
              <button className="post-list-button post-list-button--primary">
                Novo post
              </button>
            </Link>
          </div>
        </header>

        <section className="post-list-toolbar">
          <div className="post-list-search-box">
            <label htmlFor="search">Search</label>
            <input id="search" type="text" placeholder="Buscar por título, slug ou autor..." />
          </div>

          <div className="post-list-filter-box">
            <label htmlFor="status">Status</label>
            <select id="status">
              <option>All</option>
              <option>Draft</option>
              <option>Published</option>
              <option>Archived</option>
            </select>
          </div>

          <div className="post-list-filter-box">
            <label htmlFor="category">Category</label>
            <select id="category">
              <option>All</option>
              <option>Design</option>
              <option>Frontend</option>
              <option>Architecture</option>
            </select>
          </div>
        </section>

        <section className="post-list">
          {result.data?.map((post) => (
            <article key={post.id} className="post-list-item">
              <div className="post-list-status-area">
                <span className="post-list-status post-list-status--published">
                  Published
                </span>
              </div>

              <div className="post-list-item-title">
                <h2>{post.title}</h2>
                <strong className="post-list-slug">{post.slug}</strong>
              </div>

              <div className="post-list-item-description">
                <span>Description</span>
                <p>{post.description}</p>
              </div>

              <div className="post-list-item-actions">
                <button
                
                onClick={() => {
                  setSelectedPostId(post.id)}}
                className="post-list-small-button secondary"
                type="button"
              >
                Preview
              </button>

              
                <Link to={`/admin/posts/${post.id}/edit`}>
                  <button className="post-list-small-button post-list-small-button--dark">
                    Edit
                  </button>
                </Link>
              </div>

              <div className="post-list-item-meta post-list-item-created">
                <span>Created</span>
                <strong>{post.createdAt}</strong>
              </div>

              <div className="post-list-item-meta post-list-item-author">
                <span>Author</span>
                <strong>{post.author.name}</strong>
              </div>

              <div className="post-list-item-meta post-list-item-category">
                <span>Category</span>
                <strong>{post.category.title}</strong>
              </div>

              <div className="post-list-item-meta post-list-item-updated">
                <span>Updated</span>
                <strong>{post.updatedAt}</strong>
              </div>
            </article>
          ))}

{selectedPostId && (
                <div
                  className="blog-preview-modal-overlay"
                  onClick={() => setSelectedPostId(null)}
                >
                  <div
                    className="blog-preview-modal-content"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <div className="blog-preview-actions">
                                            <Link to={`/admin/posts/${selectedPostId}/edit`}>
                        <button className="blog-preview-action-button blog-preview-action-button--edit">
                          Edit
                        </button>
                      </Link>
                      <button
                        className="blog-preview-action-button blog-preview-action-button--close"
                        onClick={() => setSelectedPostId(null)}
                        type="button"
                      >
                        Close ×
                      </button>

                    </div>
                      {postPreviewQuery.isLoading && <p>Loading preview...</p>}
                      {postPreviewQuery.isError && <p>Error loading preview.</p>}
                      {postPreviewQuery.data && (
                        <PostReadingPreview post={postPreviewQuery.data} />
                      )}
                    
                  </div>

                </div>
              )}
        </section>
      </section>
    </main>
  );
}