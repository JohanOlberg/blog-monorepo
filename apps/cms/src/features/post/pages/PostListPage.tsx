
import { usePosts } from "../hooks/usePosts"
import "./PostListPage.css"
import { Link } from "react-router-dom";


export function PostListPage() {
  const result =   usePosts() 

  if (result.isLoading) return <p>Carregando...</p>;
  if (result.isError) return <p>Erro: {result.error instanceof Error ? result.error.message : "Desconhecido"}</p>;
    
  return (
    <section className="post-list-shell">
      <header className="post-list-header">
        <div>
          <span className="page-label">CMS Content</span>
          <h1>Posts</h1>
          <p>Gerencie, visualize e acompanhe todos os posts cadastrados no CMS.</p>
        </div>

        <div className="header-actions">
          <button className="button button-secondary">Filtrar</button>
          <button className="button button-primary">Novo post</button>
        </div>
      </header>
            <section className="post-list-toolbar">
        <div className="search-box">
          <label htmlFor="search">Search</label>
          <input id="search" type="text" placeholder="Buscar por título, slug ou autor..." />
        </div>

        <div className="filter-box">
          <label htmlFor="status">Status</label>
          <select id="status">
            <option>All</option>
            <option>Draft</option>
            <option>Published</option>
            <option>Archived</option>
          </select>
        </div>

        <div className="filter-box">
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
         <article className="post-list-item">
          <div className="post-status-area">
            <span className="post-status status-published">Published</span>
          </div>

          <div className="post-title">
            <h2>{post.title}</h2>
            <strong className="post-slug">{post.slug}</strong>
          </div>

          <div className="post-description">
            <span>Description</span>
            <p>{post.description}</p>
          </div>

          <div className="post-actions">
             <Link to={`/admin/posts/${post.id}`} ><button className="small-button">View</button></Link>
            <Link to={`/admin/posts/${post.id}/edit`} ><button className="small-button is-dark">Edit</button></Link>
          </div>

          <div className="post-meta post-created">
            <span>Created</span>
            <strong>{post.createdAt}</strong>
          </div>

          <div className="post-meta post-author">
            <span>Author</span>
            <strong>{post.author.name}</strong>
          </div>

          <div className="post-meta post-category">
            <span>Category</span>
            <strong>{post.category.title}</strong>
          </div>

          <div className="post-meta post-updated">
            <span>Updated</span>
            <strong>{post.updatedAt}</strong>
          </div>
        </article>
         ))}
      </section>
    </section>
  );
}
