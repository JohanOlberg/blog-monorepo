import { Link, useParams } from "react-router-dom";
import { usePostById } from "../hooks/usePostById"
import "./PostDetailPage.css"


export function PostDetailPage(){

const {postId} = useParams()
if(!postId){throw new Error("id not found") }

const result =   usePostById(parseInt(postId)) 


  if (result.isLoading) return <p>Carregando...</p>;
  if (result.isError) return <p>Erro: {result.error instanceof Error ? result.error.message : "Desconhecido"}</p>;

const post = result.data
if(!post){throw new Error}
    return(
        <main className="post-details-page">
            
                <article className="post-card">
                    <header className="post-header">
                    <div className="post-header-main">


                        <span className="post-label">Post details</span>

                        <h1 className="post-title">
                        {post.title}
                        </h1>

                        <p className="post-subtitle">
                        Informações completas do post selecionado.
                        </p>



                    </div>

                    <div className="post-actions">
                        <button className="post-action-button">Modo leitura</button>
                        <Link to={`/admin/posts/${post.id}/edit`} state={post} ><button className="post-action-button is-primary" >Modo edição</button></Link>
                        
                    </div>
                    </header>


          <section className="pill-meta pill-meta-asymmetric">
            <span className="is-large"><b>Author</b>{post.authorId}</span>
            <span className="status-badge"><b>Status</b>{post.status}</span>
            <span><b>Category</b> {post.categoryId}</span>
            <span className="is-wide"><b>Slug</b>{post.slug}</span>
            <span><b>Created at</b>{post.createdAt}</span>
            <span><b>Published at</b> {post.publishedAt}</span>
          </section>







                    <section className="post-description-section">
                    <span className="section-label">Description</span>

                    <p className="post-description">
                        {post.description}
                    </p>
                    </section>

                    <section className="post-content-section">
                    <span className="section-label">Content</span>

                    <div className="post-content">
                        <h2>Introdução</h2>

                        <p>
                        Este é o conteúdo completo do post. No seu CMS, essa área pode receber HTML vindo do editor.
                        </p>

                        <h3>Exemplo de subtítulo</h3>

                        <p>
                        O conteúdo pode conter parágrafos, listas, imagens, links e outros elementos.
                        </p>

                        <ul>
                        <li>Design mais expressivo</li>
                        <li>Componentes reutilizáveis</li>
                        <li>Identidade visual configurável</li>
                        </ul>
                    </div>
                    </section>
                </article>
       
            </main>
    )
}